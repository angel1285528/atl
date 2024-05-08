import { z } from 'zod';

// Funciones de transformación y validación personalizadas
const mayuscula = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const mayusculaNombres = (value: string) => {
  const palabras = value.split(' ');
  const palabrasMayusculas = palabras.map(mayuscula);
  return palabrasMayusculas.join(' ');
};

const validateNoNumbers = (value: string | undefined) => {
  if (value === undefined) return true;
  return !/\d/.test(value);
};

const validateWordCount = (value: string, maxWords: number) => {
  const words = value.trim().split(/\s+/);
  return words.length <= maxWords;
};

// Esquema de validación con Zod
export const zSchemaPlayers = z.object({
  playerId: z.string(),
  playerPhoto: z.string(),
  playerFechaRegistro: z.date(),
  playerFirstName: z.string()
    .min(1, 'El nombre es requerido')
    .refine(value => validateWordCount(value, 2), { message: "El nombre no debe contener más de tres palabras" })
    .refine(validateNoNumbers, { message: "El nombre no debe contener números" })
    .transform(mayusculaNombres),
  playerLastName: z.string()
    .min(1, 'El apellido paterno es requerido')
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(mayuscula),
  playerSecondLastName: z.string()
    .optional()
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(value => value ? mayuscula(value) : value)
    .nullable(),
  categoria: z.string()
    .transform(value => parseInt(value, 10))
    .refine(value => !isNaN(value), { message: "La categoría debe ser un número" }),
  fechaNacimiento: z.string()
    .refine(
      value => !isNaN(Date.parse(value)),
      { message: "Fecha de nacimiento inválida" }
    )
    .transform(value => new Date(value)),
  lugarNacimiento: z.string(),
  playerCellPhone: z.string(), // Agrega validaciones necesarias para el número de teléfono
  playerEmail: z.string().email(), // Agrega validaciones necesarias para el correo electrónico
  tipoCuota: z.string(), // Agrega validaciones necesarias para el tipo de cuota
  importeMensualidad: z.number().int(), // Agrega validaciones necesarias para el importe de la mensualidad
  status: z.string(), // Agrega validaciones necesarias para el estado del jugador
  actaDeNacimientoURL: z.string().url().optional(), // Agrega validaciones necesarias para la URL del acta de nacimiento
  actaDeNacimiento: z.boolean(), // Agrega validaciones necesarias para el acta de nacimiento
  curpUrl: z.string().url().optional(), // Agrega validaciones necesarias para la URL del CURP
  curp: z.boolean(), // Agrega validaciones necesarias para el CURP
  identificacionUrl: z.string().url().optional(), // Agrega validaciones necesarias para la URL de la identificación
  identificacion: z.boolean(), // Agrega validaciones necesarias para la identificación
  socioId: z.string(),
});
