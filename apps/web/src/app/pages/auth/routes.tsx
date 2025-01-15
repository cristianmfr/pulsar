import { Route, Routes } from 'react-router'

import { LoginRoutes } from './login/routes'
import { RegisterRoutes } from './register/routes'
import { RegisterWithTokenRoutes } from './register-with-token/routes'
import ForgotPasswordRoutes from './forgot-password/routes'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path='login' element={<LoginRoutes />} />
      <Route path='register' element={<RegisterRoutes />} />
      <Route path='register-with-token' element={<RegisterWithTokenRoutes />} />
      <Route path='forgot-password' element={<ForgotPasswordRoutes />} />
    </Routes>
  )
}
