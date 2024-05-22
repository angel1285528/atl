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
import { 
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { BsPersonFillAdd } from "react-icons/bs";
  
const FormularioPlayer: React.FC<{socioId: string}> = ({socioId}) => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<interfacePlayer>({
    resolver: zodResolver(zSchemaPlayers)
  });
  
  
  const onSubmit = async (data: interfacePlayer) => {
    console.log(data)
    try {
      const dataWithSocioId = {...data, socioId: socioId};
      console.log(dataWithSocioId)
      const nuevoJugador = await createPlayer(dataWithSocioId);
      
      toast.success('Jugador registrado exitosamente',
        {
          position: 'bottom-center',
          autoClose: 4000, // Duración de la notificación en milisegundos
        });
       
        //router.push(`/modulos/socios/${nuevoSocio.id}`);
      
      setSubmitError(null);
      window.location.href = `/modulos/socios/${socioId}`;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario."); // Establecer mensaje de error
    }
    
  };

  return (
    <Accordion className='w-full md:w-5/6 lg:w-4/6 mx-auto' type="single" collapsible>
<AccordionItem value='1'>
<AccordionTrigger className='flex items-center font-bold text-xl md:text-2xl text-blue-900'>
      <span><BsPersonFillAdd className=' text-2xl md:text-3xl text-right mr-auto'/></span><span> Registrar Jugador</span>
    </AccordionTrigger>
    <AccordionContent>
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
    </AccordionContent>
    </AccordionItem>
    </Accordion>
  );
  }
  export default FormularioPlayer