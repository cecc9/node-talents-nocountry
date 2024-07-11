import { z } from "zod";

export const registerCompanySchema = z.object({
  companyName: z
    .string()
    .min(1, { message: "El nombre de la empresa es obligatorio" })
    .max(50, {
      message: "El nombre de la empresa debe ser menor a 50 caracteres",
    }),
  businessType: z
    .string()
    .min(3, { message: "El tipo de negocio debe tener al menos 3 caracteres" }),
  email: z
    .string()
    .email({ message: "El email es inválido" })
    .min(1, { message: "El email es obligatorio" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});
