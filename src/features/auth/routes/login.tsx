import { useNavigate } from 'react-router-dom'

import { Layout, LoginForm } from '@/features/auth'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Layout title='Log in to your account'>
      <LoginForm onSuccess={() => navigate('/app')} />
    </Layout>
  )
}
