'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchemaPlayers } from '../lib/zSchemaPlayers';
import { interfacePlayer } from '../lib/interfacePlayer';
import { createPlayer } from '../lib/crud/crearJugador';
import { toast } from 'react-toastify';
import InputsFormularioJugador from './inputsJugador';





  const FormularioPlayer: React.FC<{socioId: string}> = ({socioId}) => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<interfacePlayer>({
    resolver: zodResolver(zSchemaPlayers)
  });
  
  
  const onSubmit = async (data: interfacePlayer) => {
        try {
      const dataWithSocioId = {...data, socioId: socioId};
      const nuevoJugador = await createPlayer(dataWithSocioId);
      toast.success('Usuario registrado exitosamente',
        {
          position: 'bottom-center',
          autoClose: 10000, // Duración de la notificación en milisegundos
        });
       
        //router.push(`/modulos/socios/${nuevoSocio.id}`);
      
      setSubmitError(null);

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error
    }
    
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>
        <InputsFormularioJugador />
        <div className='flex justify-center'>
          <button type="submit"  className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>
            Registrar
          </button>
        </div>
      </form>
    </FormProvider>
  );
  }
  export default FormularioPlayer