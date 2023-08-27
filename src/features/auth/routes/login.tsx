import { useNavigate } from 'react-router-dom'

import { Layout, LoginForm } from '@/features/auth'
import { routes } from '@/routes/routes'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Layout title='Log in to your account'>
      <LoginForm onSuccess={() => navigate(routes.app)} />
    </Layout>
  )
}
