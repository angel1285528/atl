import { z } from 'zod';

export const conceptoSchema = z.object({
  concepto: z.string().min(1, 'Concepto es requerido'),
  tipoConcepto: z.enum([
    'Mensualidad',
    'Uniformes',
    'Torneos',
    'Festejos',
    'Inscripciones',
    'Transportes',
    'Patrocinio',
    'Donativo',
  ]),
});

export type ConceptoFormValues = z.infer<typeof conceptoSchema>;
