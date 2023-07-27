import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { ErrorPage } from '@/error-page'
import { Login } from '@/pages/login'
import { Posts } from '@/pages/posts'
import { Root } from '@/routes/root'

// const Index = () => <div>Index</div>

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        {/*<Route index element={<Index />} />*/}
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Route>
  )
)
