import { ReactNode } from 'react'
import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

import {
  getUser,
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
  RegisterCredentialsDTO,
  registerWithEmailAndPassword,
  UserResponse,
} from '@/features/auth'
import storage from '@/utils/storage'

// eslint-disable-next-line @typescript-eslint/require-await
async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data
  storage.setToken(jwt)
  return user
}

async function loadUser() {
  if (storage.getToken()) {
    return await getUser()
  }

  return null
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data)
  return await handleUserResponse(response)
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data)
  return await handleUserResponse(response)
}

// eslint-disable-next-line @typescript-eslint/require-await
async function logoutFn() {
  storage.clearToken()
  window.location.assign(window.location.origin as unknown as string)
}

type ReactQueryAuthConfig<TQueryFnData, LoginCredentials, RegisterCredentials> = {
  userKey?: QueryKey
  userFn: QueryFunction<TQueryFnData>
  loginFn: MutationFunction<TQueryFnData, LoginCredentials>
  registerFn: MutationFunction<TQueryFnData, RegisterCredentials>
  logoutFn: MutationFunction
}

type TUserOptions<UserData> = Omit<
  UseQueryOptions<UserData, unknown, UserData>,
  'queryKey' | 'queryFn'
>

type TUserLoginOptions<UserData, LoginCredentials> = Omit<
  UseMutationOptions<UserData, unknown, LoginCredentials>,
  'mutationKey' | 'mutationFn'
>

type TUserRegisterOptions<UserData, RegisterCredentials> = Omit<
  UseMutationOptions<UserData, unknown, RegisterCredentials>,
  'mutationKey' | 'mutationFn'
>

type TUserLogoutOptions = Omit<UseMutationOptions<unknown, unknown>, 'mutationKey' | 'mutationFn'>

export const provideAuth = <UserData, LoginCredentials, RegisterCredentials>({
  userFn,
  userKey = ['authenticated-user'],
  loginFn,
  registerFn,
  logoutFn,
}: ReactQueryAuthConfig<UserData, LoginCredentials, RegisterCredentials>) => {
  const useUser = (options?: TUserOptions<UserData>) => {
    const { data, ...rest } = useQuery({
      queryKey: userKey,
      queryFn: userFn,
      ...options,
    })

    return { user: data, ...rest }
  }

  const useLogin = (options?: TUserLoginOptions<UserData, LoginCredentials>) => {
    const { onSuccess, ...mutateOptions } = options || {}
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: loginFn,
      ...mutateOptions,
      onSuccess: (user, variables, context) => {
        queryClient.setQueryData(userKey, user)
        onSuccess && onSuccess(user, variables, context)
      },
    })
  }

  const useRegister = (options?: TUserRegisterOptions<UserData, RegisterCredentials>) => {
    const { onSuccess, ...mutateOptions } = options || {}
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: registerFn,
      ...mutateOptions,
      onSuccess: (user, variables, context) => {
        queryClient.setQueryData(userKey, user)
        onSuccess && onSuccess(user, variables, context)
      },
    })
  }

  const useLogout = (options?: TUserLogoutOptions) => {
    const { onSuccess, ...mutateOptions } = options || {}
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: logoutFn,
      ...mutateOptions,
      onSuccess: (...args) => {
        queryClient.setQueryData(userKey, null)
        onSuccess && onSuccess(...args)
      },
    })
  }

  const AuthLoader = ({
    children,
    renderLoading,
    renderUnauthenticated,
    renderError = (error) => <>{JSON.stringify(error)}</>,
  }: {
    children: ReactNode
    renderLoading: () => ReactNode
    renderUnauthenticated?: () => ReactNode
    renderError?: (error: unknown) => ReactNode
  }) => {
    const { user, isSuccess, isFetched, status, error } = useUser()

    if (isSuccess) {
      if (renderUnauthenticated && !user) return renderUnauthenticated()

      return children
    }

    if (!isFetched) return renderLoading()

    if (status === 'error') {
      return renderError(error)
    }

    return null
  }

  return { useUser, useLogin, useRegister, useLogout, AuthLoader }
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = provideAuth({
  userFn: loadUser,
  loginFn,
  registerFn,
  logoutFn,
})
