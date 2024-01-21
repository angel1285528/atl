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
            <fieldset className='"bg-sky-400 border  border-solid border-gray-300 p-3"'>
              <legend>Nombre y Apellido:</legend>
            <NameFields />
            </fieldset> 
            <fieldset>
              <legend>Datos de Contacto:</legend>
              <ContactFields />
            </fieldset>
            {/* Otros componentes del formulario */}
            <fieldset>
            <legend>Datos de contexto:</legend>
            <ContextFields />
            </fieldset>
            <button type="submit" className='btn'>Enviar</button>
          </form>
        </FormProvider>
      );
}

export default FormularioSocio;