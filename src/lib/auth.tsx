import { configureAuth } from 'react-query-auth'

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

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth({
  userFn: loadUser,
  loginFn,
  registerFn,
  logoutFn,
})
