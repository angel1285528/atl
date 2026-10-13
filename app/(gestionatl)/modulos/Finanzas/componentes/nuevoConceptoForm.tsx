'use client'
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { conceptoSchema, ConceptoFormValues } from '../lib/zConceptos';
import FormInputConceptos from './inputsConceptsForm';
import { create } from '../lib/crudFinanzas';
import { TipoConcepto } from '@prisma/client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const NuevoConceptoForm: React.FC = () => {
  const methods = useForm<ConceptoFormValues>({
    resolver: zodResolver(conceptoSchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: ConceptoFormValues) => {
    try {
      await create(data);
      reset();
      alert('Concepto creado con éxito');
    } catch (error) {
      console.error('Error creando el concepto:', error);
      alert('Error creando el concepto');
    }
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Crear Nuevo Concepto</AccordionTrigger>
        <AccordionContent>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 p-4 md:p-8 bg-white shadow-md rounded-md">
             <FormInputConceptos />
              <div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Crear Concepto
                </button>
              </div>
            </form>
          </FormProvider>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NuevoConceptoForm;
