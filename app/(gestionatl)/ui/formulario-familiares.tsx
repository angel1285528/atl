'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchemaFamiliares } from '@/app/lib/zod/zSchemaFamiliares';
import { interfaceFamiliares } from '@/app/lib/interface';
import { createFamiliar } from '@/app/lib/crud/crearFamiliar';
import FamilyNameFields from './forms-fields/familiares/family-name-fields';
import FamilyContactFields from './forms-fields/familiares/family-contact-fields';
import { toast } from 'react-toastify';
import RelationshipsFields from './forms-fields/familiares/relationship-field';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const FormularioFamiliar: React.FC<{ socioId: string }> = ({ socioId }) => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<interfaceFamiliares>({
    resolver: zodResolver(zSchemaFamiliares)
  });


  const onSubmit = async (data: interfaceFamiliares) => {
    try {
      const dataWithSocioId = { ...data, socioId: socioId };
      const nuevoFamiliar = await createFamiliar(dataWithSocioId);
      toast.success('Usuario registrado exitosamente',
        {
          position: 'top-center',
          autoClose: 10000, // Duración de la notificación en milisegundos
        });
      window.location.href = `/modulos/socios/`; // Asumiendo que tienes un campo 'id' en tu modelo de socio
      setSubmitError(null);

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error

    }
  };


  return (
    <>
      <Accordion className='w-5/6 mx-auto' type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='font-bold text-2xl text-blue-900 '>Familiares</AccordionTrigger>
          <AccordionContent>
          <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>

          <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6">
            <legend className='text-center'>Nombre y Apellidos</legend>
            <FamilyNameFields />
            <RelationshipsFields />
          </fieldset>
          <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6 mx-auto">
            <legend className='text-center'>Contacto</legend>
            <FamilyContactFields />
          </fieldset>
          <div className='flex justify-center'>
            <button type="submit" className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>Registrar Socio</button>
          </div>
        </form>
      </FormProvider>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

     
    </>
  )
}

export default FormularioFamiliar;