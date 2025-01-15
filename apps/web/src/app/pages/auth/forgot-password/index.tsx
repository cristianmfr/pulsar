import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Link } from 'react-router'

export function ForgotPassword() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold'>Esqueceu sua senha?</h1>
      <p className='text-xs text-gray-500'>Insira seu email para receber um link para redefinir sua senha.</p>
      <Input placeholder='Insira seu email' />
      <Button className='w-full'>Enviar</Button>
      <Link to='/auth/login' className='text-xs underline-offset-4 hover:underline'>
        Voltar para login
      </Link>
    </div>
  )
}
