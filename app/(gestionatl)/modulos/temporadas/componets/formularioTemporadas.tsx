"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler, useFormContext, FormProvider } from 'react-hook-form';
import { Temporadas } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSeason } from "../lib/nuevaTemporada";
import { zTemporadas } from "../lib/zTemporadas";
import { toast } from "react-toastify";
import InputsFormularioTemporada from "./inputsTemporada";
const FormularioTemporadas: React.FC = () => {
    const [error, setError] = React.useState<string | null>(null);
    const methods = useForm<Temporadas>(
        { resolver: zodResolver(zTemporadas) }
    )

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit: SubmitHandler<Temporadas> = async (data) => {
        setIsSubmitting(true)
        console.log(data)
        try {
            const nuevaTemporada = await createSeason(data);
            console.log(data)
            toast.success("otro pedo",
                {
                    position: "bottom-center",
                    autoClose: 4000,
                });

            //Agregar funcion para Re-renderizar la página
            setError(null);
        } catch (error) {
            console.error("Error al enviar el formulario", error);
            setError("Error al enviar el formulario")
        }
        setIsSubmitting(false);
    }
    return (
        <>
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
        </>
    )
}

export default FormularioTemporadas