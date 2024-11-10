import { z } from "zod";

export const contactTypeOptions = [
  "Familiar",
  "Amigo",
  "Trabajo",
  "Otro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre requerido" })
    .min(3, { message: "Longitud mínima de caracteres 3" }),
  lastname: z
    .string()
    .min(1, { message: "Apellido requerido" })
    .min(3, { message: "Longitud mínima de caracteres 3" }),
  email: z
    .string()
    .min(1, { message: "Correo requerido" })
    .email("Correo inválido."),
  type: z.enum(contactTypeOptions, {
    errorMap: () => ({ message: "Seleccione tipo." }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
