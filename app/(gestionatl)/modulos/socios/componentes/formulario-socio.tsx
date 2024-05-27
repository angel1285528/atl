'use client'
import { interfaceSocio } from '@/app/lib/interfaces/interfaceSocio';
import { createSocio } from '@/app/lib/crud/crearSocio';
import { zSchema } from '@/app/lib/zod/zSocio';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, useFormContext } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import InputsFormularioSocio from './camposFormularioSocio';


//Se declara objeto para renderizar fieldsets e inputs del formulario


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
        <InputsFormularioSocio />
        <div className='flex justify-center'>
          <button type="submit" disabled={isSubmitting} className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>
            {isSubmitting ? 'Registrando...' : 'Registrar Socio'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
  }
  export default FormularioSocio