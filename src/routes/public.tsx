import { lazyImport } from '@/utils/lazy-import'

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes')

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
]
