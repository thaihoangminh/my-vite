import { useRoutes } from 'react-router-dom'

import { Landing } from '@/features/misc'
import { useUser } from '@/lib/auth'
import { routes as globalRoutes } from '@/routes/routes'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

export const AppRoutes = () => {
  const { user } = useUser()

  const commonRoutes = [{ path: globalRoutes.home, element: <Landing /> }]

  const routes = user ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
