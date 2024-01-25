'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchema } from '@/app/lib/zSchema';
import { createSocio } from '@/app/lib/action';
import { interfaceSocio } from '@/app/lib/interface';
import NameFields from './forms-fields/name-fields';
import ContactFields from './forms-fields/contact-fields';
import ContextFields from './forms-fields/context-fields';
import FilesFields from './forms-fields/socio-files-fields';

const FormularioSocio: React.FC = () => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<interfaceSocio>({
    resolver: zodResolver(zSchema)
  });

  const onSubmit = async (data: interfaceSocio) => {
    try {
      const nuevoSocio = await createSocio(data);
      console.log("Socio creado con éxito:", nuevoSocio);
      setSubmitError(null); // Resetear el mensaje de error en caso de éxito
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
          <NameFields />
        </fieldset>
        <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6 mx-auto">
          <legend className='text-center'>Contacto</legend>
          <ContactFields />
        </fieldset>
        {/* Otros componentes del formulario */}
        <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6 mx-auto">
          <legend className='text-center'>Datos de contexto</legend>
          <ContextFields />
        </fieldset>
        <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6 mx-auto">
          <legend className='text-center'>Archivos para expediente</legend>
          <div className='flex flex-col mx-auto'>
           <FilesFields />
          </div>

        </fieldset>


      <div className='flex justify-center'>
        <button type="submit" className='btn btn-primary text-amber-400 w-1/2 my-6'>Registrar Socio</button>
      </div>
      </form>
    </FormProvider>
  );
}

export default FormularioSocio;