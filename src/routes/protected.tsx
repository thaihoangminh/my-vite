import { Navigate } from 'react-router-dom'

import { AppLayout } from '@/components/layout/app-layout'
import { routes } from '@/routes/routes'
import { lazyImport } from '@/utils/lazy-import'

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard')
const { Profile } = lazyImport(() => import('@/features/users'), 'Profile')
const { Users } = lazyImport(() => import('@/features/users'), 'Users')

export const protectedRoutes = [
  {
    path: routes.app,
    element: <AppLayout />,
    children: [
      { path: routes.dashboard, element: <Dashboard /> },
      { path: routes.users, element: <Users /> },
      { path: routes.profile, element: <Profile /> },
      { path: '*', element: <Navigate to='.' /> },
    ],
  },
]
