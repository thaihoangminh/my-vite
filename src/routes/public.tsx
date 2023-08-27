import { routes } from '@/routes/routes'
import { lazyImport } from '@/utils/lazy-import'

const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes')

export const publicRoutes = [
  {
    path: routes.public,
    element: <AuthRoutes />,
  },
]
