import { z } from 'zod';


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
    categoria: z.string()
    .transform(value => parseInt(value, 10)) // Convierte la cadena a número
    .refine(value => !isNaN(value), { message: "La categoría debe ser un número" }),
    playerCurp: z.string(),
    fechaNacimiento: z.string()
    .refine(
      value => !isNaN(Date.parse(value)),
      { message: "Fecha de nacimiento inválida" }
    )
    .transform(value => new Date(value)),
    cuota: z.enum(["A", "B", "C", "D"]),
    status: z.enum(["ACTIVO", "INACTIVO"]),
    fingerprint: z.string().nullable(),
    socioId: z.string(),
    });