import { z } from 'zod';
import { TypeOf } from 'zod';

const mayuscula = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  
  const mayusculaNombres = (value: string) => {
    // Divide la cadena en palabras
    const palabras = value.split(' ');
  
    // Aplica la función mayuscula a cada palabra
    const palabrasMayusculas = palabras.map(mayuscula);
  
    // Une las palabras en una cadena
    return palabrasMayusculas.join(' ');
  };
  
    const validateNoNumbers = (value: string | undefined) => {
      if (value === undefined) return true;
    return !/\d/.test(value); // Esta expresión regular busca dígitos    
    }  
    const validateWordCount = (value: string, maxWords: number) => {
      const words = value.trim().split(/\s+/); // Divide el valor por espacios, incluyendo múltiples espacios consecutivos
      return words.length <= maxWords;
    };
  
  
export const zSchemaPlayers = z.object({
    playerPhoto: z.string(),
    playerFechaRegistro: z.string(),
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
    categoria: z.number(),
    playerCurp: z.string(),
    fechaNacimiento: z.date(),
    cuota: z.enum(["A", "B", "C", "D"]),
    status: z.enum(["ACTIVO", "INACTIVO"]),
    fingerprint: z.string().nullable(),
    socioId: z.string(),
    });