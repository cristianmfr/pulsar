import AuthLayout from '@/shared/layouts/auth'
import { RegisterWithToken } from './pages/register-form'

export const RegisterRoutes = () => {
  return (
    <AuthLayout>
      <RegisterWithToken />
    </AuthLayout>
  )
}
