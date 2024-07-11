import { z } from "zod"

export const registerCandidateSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe ser al menos 3 caracteres" })
    .max(20, { message: "El nombre debe ser menor a 20 caracteres" }),
  surname: z
    .string()
    .min(3, { message: "El apellido debe ser al menos 3 caracteres" })
    .max(25, { message: "El apellido debe ser al menos 25 caracteres" }),
  email: z
    .string()
    .email({ message: "Ingresa un email valido" })
    .min(5, { message: "El email debe ser de al menos 5 caracteres" }),
  password: z.string().min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres"
  }),
  country: z
    .string()
    .min(3, { message: "El pais debe ser de al menos 3 caracteres" }),
  province: z
    .string()
    .min(4, { message: "La provincia debe ser de al menos 4 caracteres" })
})
