import { Navigate } from 'react-router-dom'

import { AppLayout } from '@/components/layout/app-layout'
import { lazyImport } from '@/utils/lazy-import'

const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard')
const { Profile } = lazyImport(() => import('@/features/users'), 'Profile')
const { Users } = lazyImport(() => import('@/features/users'), 'Users')

export const protectedRoutes = [
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'profile', element: <Profile /> },
      { path: '', element: <Dashboard /> },
      { path: '*', element: <Navigate to='.' /> },
    ],
  },
]
