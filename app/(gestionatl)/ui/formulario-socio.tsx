'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchema } from '@/app/lib/zSchema';
import { createSocio } from '@/app/lib/action';
import { interfaceSocio } from '@/app/lib/interface';
import NameFields from './forms-fields/name-fields';



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
          <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>
            <NameFields />
            {/* Otros componentes del formulario */}
            <button type="submit" className='btn'>Enviar</button>
          </form>
        </FormProvider>
      );
}

export default FormularioSocio;