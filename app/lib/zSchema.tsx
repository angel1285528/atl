import { z } from 'zod';
import { TypeOf } from 'zod';

const mayuscula = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
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
    .refine(value => validateWordCount(value, 2), { message: "El nombre no debe contener más de tres palabras" })
    .refine(validateNoNumbers, { message: "El nombre no debe contener números" })
    .transform(mayuscula),
  lastName: z.string()
    .min(1, 'El apellido paterno es requerido')
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(mayuscula),
  secondLastName: z.string()
    .optional()
    .refine(validateNoNumbers, { message: "El apellido no debe contener números" })
    .transform(value => value ? mayuscula(value) : value)
    .nullable()
/* street: z.string(),
  street_number: z.string (),   
  city: z.string (),
  administrativeArea: z.string (),
  postalCode: z.string (),
  country: z.string (),
  phone_number: z.string ()
  .length(10, 'El número de teléfono debe contener exactamente 10 dígitos')
  .refine(value => /^\d+$/.test(value), { message: 'El número de teléfono solo debe contener dígitos numéricos' }),
  email: z.string().email('Debe de ser un correo valido'),
  work: z.string(),
  scholarity: z.string(),
  status: z.boolean(),
  fechaIngreso: z.date(),
photo: z.string(),*/
  });


  export type FormData = TypeOf<typeof zSchema>;