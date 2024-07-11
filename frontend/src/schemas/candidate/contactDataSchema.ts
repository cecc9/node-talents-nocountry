import { z } from "zod";

export const contactDataSchema = z.object({
  celular: z.string().min(3, {
    message: "El número de celular debe tener al menos 3 caracteres",
  }),
  correoElectronico: z
    .string()
    .email({ message: "El correo electrónico no es válido" }),
  provincia: z
    .string()
    .min(3, { message: "La provincia debe tener al menos 3 caracteres" }),
  pais: z
    .string()
    .min(3, { message: "El país debe tener al menos 3 caracteres" }),
  direccion: z
    .string()
    .min(10, { message: "La dirección debe tener al menos 10 caracteres" }),
  numero: z
    .string()
    .min(3, { message: "El número debe tener al menos 3 caracteres" }),
});
