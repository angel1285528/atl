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

const validateCategoria = (value: string): boolean => {
  const currentYear = new Date().getFullYear();
  const numericValue = parseInt(value);
  return !isNaN(numericValue) && numericValue >= 2008 && numericValue <= currentYear;
};
// Esquema de validación con Zod
export const zSchemaPlayers = z.object({
  playerId: z.string(),
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
    .refine(value => validateCategoria(value)),
  rama: z.string(),
  fechaNacimiento: z.date({
    required_error: "La fecha de Nacimiento es requerida",
  }),
  playerPhotoUrl: z.string(),
  playerCellPhone: z.string(),
  playerEmail: z.string(),

});

