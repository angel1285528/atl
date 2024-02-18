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
  phoneNumber: z.string ()
  .length(10, 'El número de teléfono debe contener exactamente 10 dígitos')
  .refine(value => /^\d+$/.test(value), { message: 'El número de teléfono solo debe contener dígitos numéricos' }),
  email: z.string().email('Debe de ser un correo valido'),
  work: z.string()
  .optional(),
  scholarity: z.string()
  .optional(),
  urlSocioPhoto: z.string()
  .optional(),
  urlSocioIne: z.string()
  .optional(),
  /*
  status: z.boolean()
  .transform(value => value ? true : false),
  fechaIngreso: z.date()
.refine(value => value <= new Date(), { message: "La fecha de ingreso no puede ser mayor a la fecha actual" }) */
  

  /* street: z.string(),
  street_number: z.string (),   
  city: z.string (),
  administrativeArea: z.string (),
  postalCode: z.string (),
  country: z.string (),
  work: z.string(),
  scholarity: z.string(),
  status: z.boolean(),
  fechaIngreso: z.date(),
photo: z.string(),*/
  });


  export type FormData = TypeOf<typeof zSchema>;