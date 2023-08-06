import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Spinner } from '@/components/elements'
import { MainLayout } from '@/components/layout/main-layout'

export const AppLayout = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className='flex h-full w-full items-center justify-center'>
            <Spinner size='xl' />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}
