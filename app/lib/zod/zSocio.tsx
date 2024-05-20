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
export const zSchema = z.object ({
  id: z.string()
    .length(18, "El curpo debe de tener 18 caracteres")
    .toUpperCase(),
  firstName: z.string()
    .min(1, 'El nombre es requerido')
    .refine(value => validateWordCount(value, 2), { message: "El nombre no debe contener más de dos palabras" })
    .refine(validateNoNumbers, { message: "El nombre no debe contener números" })
    .transform(mayusculaNombres),
  lastName: z.string()
    .min(1, 'El apellido paterno es requerido')
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .refine(value => validateWordCount(value, 1), { message: "El apellido no debe contener más de una palabras" })
    .transform(mayuscula),
  secondLastName: z.string()
    .optional()
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(value => value ? mayuscula(value) : value)
    .nullable(),
  street: z.string()
    .transform(mayuscula),
  streetNumber: z.string()
    .max(5, "El número de casa debe de ser máximo de 4 digitos")
    .refine(value => /^\d+$/.test(value), { message: 'El número de teléfono solo debe contener dígitos numéricos' }),
  colonia: z.string()
  .refine(value => validateWordCount(value, 5), { message: "El nombre no debe contener más de 5 palabras" }),
  postalCode: z.string()
  .length(5, "El codigo postal debe de tener 5 caracteres")
  .refine(value => /^\d+$/.test(value), { message: 'El código postal solo debe contener dígitos numéricos' }),
  city: z.string()
    .refine(value => validateWordCount(value, 2), { message: "La ciudad no dedbe de tener más de dos palabras" })
    .transform(mayuscula),
  state:z.string()
    .refine(value => validateWordCount(value, 2), { message: "La ciudad no dedbe de tener más de dos palabras" })
    .transform(mayuscula),
  phoneNumber: z.string ()
  .length(10, 'El número de teléfono debe contener exactamente 10 dígitos')
  .refine(value => /^\d+$/.test(value), { message: 'El número de teléfono solo debe contener dígitos numéricos' }),
  email: z.string()
  .email('Debe de ser un correo valido'),
  urlSocioPhoto: z.string()
  .optional(),
  urlSocioIne: z.string()
  .optional(),
  urlIdDomicilio: z.string()
  .optional(),
  periodoDePago: z.string(),
  });


  export type FormData = TypeOf<typeof zSchema>;