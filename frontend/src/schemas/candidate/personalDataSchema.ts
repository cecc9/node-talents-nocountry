import { z } from "zod";

export const personalDataSchema = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  fechaDeNacimiento: z
    .date()
    .min(new Date("1900-01-01"), { message: "Ya habrias muerto..." })
    .max(new Date("2024-01-01"), { message: "Fecha sospechosa..." }),
  genero: z.enum(["Masculino", "Femenino", "Otro"]),
  estadoCivil: z.enum(["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"]),
  DNI: z
    .string()
    .min(8, { message: "El DNI debe tener al menos 8 caracteres" }),
});
