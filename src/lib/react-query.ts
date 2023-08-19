import { DefaultOptions, QueryClient, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { AsyncReturnType, Promisable } from 'type-fest'

type Fn = (...args: any) => any

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

export type ExtractFnReturnType<FnType extends Fn> = Promisable<ReturnType<FnType>>

export type MutationConfig<MutationFnType extends Fn> = UseMutationOptions<
  ExtractFnReturnType<AsyncReturnType<MutationFnType>>,
  AxiosError,
  Parameters<MutationFnType>[0]
>
