import { useNavigate } from 'react-router-dom'

import { Layout, RegisterForm } from '@/features/auth'

export const Register = () => {
  const navigate = useNavigate()

  return (
    <Layout title='Register your account'>
      <RegisterForm onSuccess={() => navigate('/app')} />
    </Layout>
  )
}
