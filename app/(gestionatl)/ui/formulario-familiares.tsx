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

const FormularioFamiliar: React.FC = () => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<interfaceFamiliares>({
    resolver: zodResolver(zSchemaFamiliares)
  });
 

  const onSubmit = async (data: interfaceFamiliares) => {
    try {
      const nuevoSocio = await createFamiliar(data);
      toast.success('Usuario registrado exitosamente',
        {
          position: 'top-center',
          autoClose: 10000, // Duración de la notificación en milisegundos
        });
      //window.location.href = `/modulos/socios/`; // Asumiendo que tienes un campo 'id' en tu modelo de socio
        setSubmitError(null);
      
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error

    }
  };


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black hover:'>

        <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6">
          <legend className='text-center'>Nombre y Apellidos</legend>
          <FamilyNameFields />
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
  )
}

export default FormularioFamiliar;