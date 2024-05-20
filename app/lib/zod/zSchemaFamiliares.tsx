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

export const zSchemaFamiliares = z.object ({
    familyFirstName: z.string()
    .min(1, 'El nombre es requerido')
    .refine(value => validateWordCount(value, 2), { message: "El nombre no debe contener más de tres palabras" })
    .refine(validateNoNumbers, { message: "El nombre no debe contener números" })
    .transform(mayusculaNombres),
    familyLastName: z.string()
    .min(1, 'El apellido paterno es requerido')
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(mayuscula),
    familySecondLastName: z.string()
    .optional()
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(value => value ? mayuscula(value) : value)
    .nullable(),
  familyPhoneNumber: z.string ()
  .length(10, 'El número de teléfono debe contener exactamente 10 dígitos')
  .refine(value => /^\d+$/.test(value), { message: 'El número de teléfono solo debe contener dígitos numéricos' }),
  familyRelationship: z.string()
    .min(1, 'La relación es requerida')
    .refine(validateNoNumbers, { message: "La relación no debe contener números" })
    .transform(mayusculaNombres),

});


  export type FormData = TypeOf<typeof zSchemaFamiliares>;