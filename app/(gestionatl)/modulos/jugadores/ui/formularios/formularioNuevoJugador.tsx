'use client'
import React from "react";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { interfacePlayer } from "../../lib/interfacePlayer";
import { zodResolver } from "@hookform/resolvers/zod";
import { zSchemaPlayers } from "../../lib/zSchemaPlayers";
import { createPlayer } from "../../lib/crud/crearJugador";
import { toast } from "react-toastify";
import PlayerNameFields from "./form-fields-player/playerNameFields";
import PlayerBirthFields from "./form-fields-player/playerBirthFields";
import PlayerFilesFields from "./form-fields-player/playerFilesFields";

const FormularioJugador: React.FC<{ socioId:string}> = ({ socioId }) => {
    const [submitError, setSubmitError] = React.useState<string | null>(null);
    const methods = useForm<interfacePlayer>({
        resolver: zodResolver(zSchemaPlayers)
    });

    const onSubmit = async (data: interfacePlayer) => {
        try {
            const dataWithSocioId = { ...data, socioId: socioId };
            const nuevoJugador = await createPlayer(dataWithSocioId);
            toast.success('Jugador registrado exitosamente',
                {
                    position: 'top-center',
                    autoClose: 10000, // Duración de la notificación en milisegundos
                });
            setSubmitError(null);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setSubmitError("Error al enviar el formulario.");
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="text-black">
                <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6">
                    <legend className='text-center'>Nombre y Apellidos</legend>
                    <PlayerNameFields />
                </fieldset>
                <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6">
                    <legend className='text-center'>Fecha y Lugar de Nacimiento</legend>
                    <PlayerBirthFields />
                </fieldset>
                <fieldset className="rounded border-t-4  border-solid border-amber-500 mt-6">
                    <legend className='text-center'>Fotografia del Jugador</legend>
                    <PlayerFilesFields />
                </fieldset>

                <div className='flex justify-center'>
                    <button type="submit" className='btn btn-primary bg-amber-400 text-white w-1/2 my-6'>Registrar Jugador</button>
                </div>
            </form>
        </FormProvider>
    )
}

export default FormularioJugador;