import { Button } from '@/components/atoms/button'
import { Checkbox } from '@/components/atoms/checkbox'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { cn } from '@/utils/cn'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams, useNavigate } from 'react-router'
import { RegisterWithTokenFormData, registerWithTokenSchema } from '../../types/register-with-token-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { identifyPronounFromName } from '@/utils/identify-pronoun-from-name'
import { toast } from 'sonner'
import { CREATE_CUSTOMER } from '@/shared/api/mutations/create-customer'
import { useMutation } from '@apollo/client'

export const RegisterWithToken = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [createCustomer, { loading }] = useMutation(CREATE_CUSTOMER)

  const { register, handleSubmit, setValue } = useForm<RegisterWithTokenFormData>({
    resolver: zodResolver(registerWithTokenSchema),
  })

  const [isChecked, setIsChecked] = useState(false)

  const handleRegister = (data: RegisterWithTokenFormData) => {
    createCustomer({
      variables: {
        createUserByCustomerInput: {
          email: data.email,
          phone: data.phone,
          document: data.document,
          password: data.password,
          token: token,
        },
      },
    })
      .then(() => {
        toast.success('Usuário criado com sucesso')
        navigate('/auth/login')
      })
      .catch((error) => {
        toast.error('Erro ao criar usuário')
        console.log(error)
      })
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setValue('acceptTerms', !isChecked)
  }

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Loader2 className='animate-spin' />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)} className={cn('flex flex-col gap-6')}>
      <div className='flex flex-col items-center gap-2 text-center'>
        <span className='flex flex-row gap-2 text-2xl font-bold'>{identifyPronounFromName('Usuario')}, Usuário</span>
        <p className='text-balance text-xs text-muted-foreground'>Insira os dados solicitados para criar sua conta.</p>
      </div>
      <div className='grid gap-6'>
        <div className='grid gap-2'>
          <Label htmlFor='document'>Documento (CPF)</Label>
          <Input id='document' type='text' placeholder='********' required {...register('document')} />
        </div>{' '}
        <div className='grid gap-2'>
          <Label htmlFor='phone'>Telefone</Label>
          <Input id='phone' type='text' placeholder='********' required {...register('phone')} />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='********' required {...register('email')} />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Senha</Label>
          <Input id='password' type='password' placeholder='********' required {...register('password')} />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='passwordConfirmation'>Confirme a senha</Label>
          <Input
            id='passwordConfirmation'
            type='password'
            placeholder='********'
            required
            {...register('passwordConfirmation')}
          />
        </div>
        <div className='flex flex-row items-center gap-2'>
          <Checkbox checked={isChecked} onCheckedChange={handleCheckboxChange} />
          <Label htmlFor='acceptTerms'>
            Aceito os{' '}
            <Link to='/terms' target='_blank' className='underline'>
              termos de uso
            </Link>{' '}
            e a{' '}
            <Link to='/privacy' target='_blank' className='underline'>
              política de privacidade
            </Link>
          </Label>
        </div>
        {loading ? (
          <Button disabled>
            <Loader2 className='animate-spin' />
            Aguarde
          </Button>
        ) : (
          <Button type='submit'>Prosseguir</Button>
        )}
      </div>
    </form>
  )
}
