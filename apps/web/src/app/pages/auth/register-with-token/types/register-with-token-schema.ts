import { z } from 'zod'

export const registerWithTokenSchema = z.object({
    document: z
        .string()
        .min(11, { message: 'CPF deve ter pelo menos 11 caracteres' }),
    phone: z
        .string()
        .min(11, { message: 'Telefone deve ter pelo menos 11 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z
        .string()
        .min(8, { message: 'Senha deve ter pelo menos 8 caracteres' }),
    passwordConfirmation: z
        .string()
        .min(8, { message: 'Senha deve ter pelo menos 8 caracteres' }),
    acceptTerms: z.boolean(),
})

export type RegisterWithTokenFormData = z.infer<typeof registerWithTokenSchema>
