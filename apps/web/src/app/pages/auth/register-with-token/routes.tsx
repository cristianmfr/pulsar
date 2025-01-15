import { RegisterWithToken } from './pages/register-form/index'
import AuthLayout from '@/shared/layouts/auth'

export function RegisterWithTokenRoutes() {
  return (
    <AuthLayout>
      <RegisterWithToken />
    </AuthLayout>
  )
}
