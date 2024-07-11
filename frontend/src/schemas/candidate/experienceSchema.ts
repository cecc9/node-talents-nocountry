import { z } from "zod";

const experienceSchema = z.object({
  empresa: z
    .string()
    .min(3, { message: "La empresa debe tener al menos 3 caracteres" }),
  actividad: z
    .string()
    .min(3, { message: "La actividad debe tener al menos 3 caracteres" }),
  cargo: z
    .string()
    .min(3, { message: "El cargo debe tener al menos 3 caracteres" }),
  nivelDeExperiencia: z.enum(["Principiante", "Intermedio", "Avanzado"]),
  areaDelCargo: z
    .string()
    .min(3, { message: "El área del cargo debe tener al menos 3 caracteres" }),
  subarea: z
    .string()
    .min(3, { message: "La subárea debe tener al menos 3 caracteres" }),
  pais: z
    .string()
    .min(3, { message: "El país debe tener al menos 3 caracteres" }),
  fechaDeInicio: z.date(),
  fechaDeFin: z.date(),
  descripcion: z
    .string()
    .min(3, { message: "La descripción debe tener al menos 3 caracteres" }),
});

export default experienceSchema;
