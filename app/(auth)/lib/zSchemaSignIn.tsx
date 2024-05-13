import { object, string } from "zod"
 
export const signInSchema = object({
  email: string({ required_error: "El correo electrónico es requerido" })
    .min(1, "El correo electrónico es requerido")
    .email("Email Invalido"),
  password: string({ required_error: "El correo electrónico es requerido" })
    .min(1, "El correo electrónico es requerido")
    .min(8, "La contraseña debe de tener un mínimo de 8 de carácteres")
    .max(32, "La contraseña debe de tener un máximo de 32 carácteres"),
})