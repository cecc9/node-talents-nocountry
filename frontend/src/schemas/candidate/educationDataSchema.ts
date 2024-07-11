import { z } from "zod";

const educationSchema = z.object({
  tituloCarrera: z.string().min(9, {
    message: "El título o carrera debe tener al menos 9 caracteres",
  }),
  pais: z
    .string()
    .min(3, { message: "El país debe tener al menos 3 caracteres" }),
  tipoDeEstudio: z
    .string()
    .min(5, { message: "El tipo de estudio debe tener al menos 5 caracteres" }),
  areaDeEstudio: z
    .string()
    .min(4, { message: "El área de estudio debe tener al menos 4 caracteres" }),
  institucion: z
    .string()
    .min(8, { message: "La institución debe tener al menos 8 caracteres" }),
  estado: z
    .string()
    .min(3, { message: "El estado debe tener al menos 3 caracteres" }),
  fechaDeInicio: z.date(),
  fechaDeFin: z.date(),
});

export default educationSchema;
