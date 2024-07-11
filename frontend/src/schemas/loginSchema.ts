import { z } from "zod"

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Ingresa un email valido" })
    .min(5, { message: "El email debe ser de al menos 5 caracteres" }),
  password: z.string().min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres"
  })
})

export type LoginInputsType = z.infer<typeof LoginSchema>
