"use client"
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Temporadas } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSeason } from "../lib/nuevaTemporada";
import { zTemporadas } from "../lib/zTemporadas";
import { toast } from "react-toastify";
import InputsFormularioTemporada from "./inputsTemporada";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FormularioTemporadasProps {
  onSeasonCreated: () => void;
}

const FormularioTemporadas: React.FC<FormularioTemporadasProps> = ({ onSeasonCreated }) => {
  const [error, setError] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm<Temporadas>(
    { resolver: zodResolver(zTemporadas) }
  )

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit: SubmitHandler<Temporadas> = async (data) => {
    setIsSubmitting(true)
    try {
      const nuevaTemporada = await createSeason(data);
      toast.success("Temporada creada con éxito",
        {
          position: "bottom-center",
          autoClose: 4000,
        });

      setError(null);
      onSeasonCreated(); // Llamar a la función de callback para actualizar la tabla
      setIsOpen(false); // Cerrar el acordeón
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      setError("Error al enviar el formulario")
    }
    setIsSubmitting(false);
  }

  return (
    <>
      <Accordion className='w-full md:w-5/6 lg:w-4/6 mx-auto' type='single' collapsible value={isOpen ? 'item-1' : ''}>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='flex items-center font-bold text-xl md:text-2xl text-blue-900' onClick={() => setIsOpen(!isOpen)}>
            <span><PlusCircle className=' text-2xl md:text-3xl text-right mr-auto' /></span><span>Nueva Temporada</span>
          </AccordionTrigger>
          <AccordionContent>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <InputsFormularioTemporada />
                <div className='flex justify-center'>
                  <button type="submit" disabled={isSubmitting} className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>
                    {isSubmitting ? 'Registrando...' : 'Registrar Temporada'}
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

export default FormularioTemporadas;
