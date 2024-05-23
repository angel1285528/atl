import React from "react";
import ExpedienteJugador from "../componets/expedienteJugador";
import { cargarJugador } from "../lib/crud/cargarJugador";

export const dynamic = "force-dynamic"

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const id = params.slug;

  // Verificación adicional para asegurarse de que el id no es undefined
  if (!id) {
    return <div>Error: El id del jugador no es válido</div>;
  }

  const data = await cargarJugador(id);

  return (
    <div className="text-black w-11/12 mx-auto mt-5">
      <hr className="border-4 border-blue-800 mt-4" />
      <h1 className="text-center font-extrabold text-4xl">Expediente Jugador</h1>
      <hr className="border-4 border-blue-800 mt-4" />
      <ExpedienteJugador playerId={id} />
      <hr className="border-4 border-blue-800 mt-4" />
    </div>
  );
}
