'use client'
import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchemaPlayers } from '../lib/zSchemaPlayers';
import { jugador, Cuota } from '@prisma/client';
import { createPlayer } from '../lib/crud/crudJugador';
import { toast } from 'react-toastify';
import InputsFormularioJugador from './inputsJugador';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BsPersonFillAdd } from "react-icons/bs";

interface FormData extends jugador {
  tipoMensualidad: Cuota;
  importeMensualidad: number;
  idClase: string;
}

const FormularioPlayer: React.FC<{socioId: string}> = ({socioId}) => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const methods = useForm<FormData>({
    resolver: zodResolver(zSchemaPlayers)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data); // For debugging
    try {
      const playerData = {
        ...data,
        socioId,
        tipoMensualidad: data.tipoMensualidad,
        importeMensualidad: data.importeMensualidad.toString(),
        idClase: data.idClase
      };
      console.log(playerData); // For debugging
      const nuevoJugador = await createPlayer(playerData);

      toast.success('Jugador registrado exitosamente', {
        position: 'bottom-center',
        autoClose: 4000,
      });

      setSubmitError(null);
      window.location.href = `/modulos/socios/${socioId}`;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitError("Error al enviar el formulario.");
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
                <button type="submit" className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>
                  Registrar
                </button>
              </div>
            </form>
          </FormProvider>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FormularioPlayer;