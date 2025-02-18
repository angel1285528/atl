import { MdPassword } from "react-icons/md";
import { z } from "zod";

export const usuarioSchema = z.object({
  correo: z.string().email("Correo inválido"),
  telefono: z.string().regex(/^\d{10}$/, "Teléfono inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  rol: z.enum(["SuperAdmin", "Admin", "Entrenador", "Socio"]),
});