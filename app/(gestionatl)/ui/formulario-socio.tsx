'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchema } from '@/app/lib/zSchema';
import { createSocio } from '@/app/lib/action';
import { interfaceSocio } from '@/app/lib/interface';
import NameFields from './forms-fields/name-fields';
import ContactFields from './forms-fields/contact-fields';
import FilesFields from './forms-fields/socio-files-fields';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const FormularioSocio: React.FC = () => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const router = useRouter();
  const methods = useForm<interfaceSocio>({
    resolver: zodResolver(zSchema)
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const onSubmit: SubmitHandler<interfaceSocio> = async (data) => {
    setIsSubmitting(true);
    try {
      const nuevoSocio = await createSocio(data);
      toast.success('Usuario registrado exitosamente',
        {
          position: 'bottom-center',
          autoClose: 4000, // Duración de la notificación en milisegundos
        });
       
        router.push(`/modulos/socios/${nuevoSocio.id}`);
      
      setSubmitError(null);

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error
    }
    setIsSubmitting(false);

  };


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>

        <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Nombre y Apellidos</legend>
          <NameFields />
        </fieldset>
        <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Contacto</legend>
          <ContactFields />
        </fieldset>
        <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Archivos para expediente</legend>
          <div className='flex flex-col mx-auto'>
            <FilesFields />
          </div>

        </fieldset>


        <div className='flex justify-center'>
          <button type="submit" disabled={isSubmitting} className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>
            {isSubmitting ? 'Registrando...' : 'Registrar Socio'}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default FormularioSocio;