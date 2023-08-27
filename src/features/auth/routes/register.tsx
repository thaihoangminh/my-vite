import { useNavigate } from 'react-router-dom'

import { Layout, RegisterForm } from '@/features/auth'
import { routes } from '@/routes/routes'

export const Register = () => {
  const navigate = useNavigate()

  return (
    <Layout title='Register your account'>
      <RegisterForm onSuccess={() => navigate(routes.app)} />
    </Layout>
  )
}
