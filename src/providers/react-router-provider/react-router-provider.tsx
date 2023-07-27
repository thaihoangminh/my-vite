import { RouterProvider } from 'react-router-dom'

import { routers } from '@/routes/routers.tsx'

export const ReactRouterProvider = () => <RouterProvider router={routers} />
