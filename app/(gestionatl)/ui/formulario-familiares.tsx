'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchemaFamiliares } from '@/app/lib/zod/zSchemaFamiliares';
import { familiares } from '@prisma/client';
import { createFamiliar } from '../modulos/socios/lib/crudSocios';
import { toast } from 'react-toastify';
import FamilyContactFields from './forms-fields/familiares/family-contact-fields';
import FamilyNameFields from './forms-fields/familiares/family-name-fields';
import RelationshipsFields from './forms-fields/familiares/relationship-field';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BsPersonFillAdd } from "react-icons/bs";



interface FormularioFamiliarProps {
  socioId: string;
}

const FormularioFamiliar: React.FC<FormularioFamiliarProps> = ({ socioId }) => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<familiares>({
    resolver: zodResolver(zSchemaFamiliares)
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const onSubmit = async (data: familiares) => {
    setIsSubmitting(true);
    try {
      const dataWithSocioId = { ...data, socioId: socioId };
      const nuevoFamiliar = await createFamiliar(dataWithSocioId);
      toast.success('Familiar registrado exitosamente',
        {
          position:'top-center',
          autoClose: 5000, // Duración de la notificación en milisegundos
     
        });
      
        
      setSubmitError(null);
      window.location.href = `/modulos/socios/${socioId}`;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error

    }
    setIsSubmitting(false);
  };


  return (
    <>
       <Accordion className='w-full md:w-5/6 lg:w-4/6 mx-auto' type="single" collapsible>
        <AccordionItem value="item-1">
        <AccordionTrigger className='flex items-center font-bold text-xl md:text-2xl text-blue-900'>
      <span><BsPersonFillAdd className=' text-2xl md:text-3xl text-right mr-auto'/></span><span> Registrar Familiar</span>
    </AccordionTrigger>   
    <AccordionContent>
          <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>

        <fieldset className="rounded border-t-4 border-solid border-amber-500 my-4">
        <legend className='text-center font-bold text-lg md:text-xl'>Nombre y Apellidos</legend>
            <FamilyNameFields />
            <RelationshipsFields />
          </fieldset>
          <fieldset className="rounded border-t-4 border-solid border-amber-500 my-4">
                  <legend className='text-center font-bold text-lg md:text-xl'>Contacto</legend>
            <FamilyContactFields />
          </fieldset>
          <div className='flex justify-center mt-4'>
          <button 
          type="submit" 
          disabled={isSubmitting || !!submitError} className='btn btn-primary bg-amber-400 text-white px-4 py-2 md:w-1/2 lg:w-1/3'>
          {isSubmitting ? 'Registrando...' : 'Registrar Familiar'}
            </button>
          
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