import { ReactNode } from 'react'
import { Route } from 'react-router-dom'

type PrivateRouteProps = {
  path: string
  element: ReactNode
}
export const PrivateRoute = ({ path, element }: PrivateRouteProps) => {
  // const user = useAuthUser();
  return <Route path={path} element={element} />
}
