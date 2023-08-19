import { ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Button, Spinner } from '@/components/elements'
import { Notifications } from '@/components/notifications'
import { AuthLoader } from '@/lib/auth'
import { queryClient } from '@/lib/react-query'

const ErrorFallback = () => {
  return (
    <div
      className='flex h-screen w-screen flex-col items-center justify-center text-red-500'
      role='alert'
    >
      <h2 className='text-lg font-semibold'>Ooops, something went wrong :( </h2>
      <Button className='mt-4' onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className='flex h-screen w-screen items-center justify-center'>
          <Spinner />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Notifications />
            <AuthLoader
              renderLoading={() => (
                <div className='flex h-screen w-screen items-center justify-center'>
                  <Spinner size='xl' />
                </div>
              )}
            >
              <BrowserRouter>{children}</BrowserRouter>
            </AuthLoader>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  )
}
