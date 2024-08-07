// components/expedienteJugador.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { cargarJugador } from '../lib/crud/cargarJugador';
import { actualizarEstadoJugador } from '../lib/crud/crudJugador';
import Image from 'next/image';
import { jugador as JugadorModel, Status_Jugador } from '@prisma/client'; // Importar Status_Jugador
import Link from 'next/link';
import AvatarATL from '@/app/(gestionatl)/ui/avatarATL';
import { actualizarFoto } from '../lib/crud/agregarFotoJugador';

interface ExpedienteJugadorProps {
  playerId: string;
}

const ExpedienteJugador: React.FC<ExpedienteJugadorProps> = ({ playerId }) => {
  const [jugador, setJugador] = useState<JugadorModel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [nuevoEstado, setNuevoEstado] = useState<Status_Jugador | ''>(''); // Usar Status_Jugador o ''

  useEffect(() => {
    const obtenerDatosJugador = async () => {
      try {
        if (!playerId) {
          throw new Error('El idJugador no debe ser undefined o null');
        }
        const data = await cargarJugador(playerId);
        setJugador(data);
      } catch (err) {
        const error = err as Error; // Convertir a tipo Error
        console.error('Error al obtener los datos del jugador:', error);
        setError('Error al cargar los datos del jugador');
      }
    };

    obtenerDatosJugador();
  }, [playerId]);

  const handleEstadoChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nuevoEstado = event.target.value as Status_Jugador; // Convertir a Status_Jugador
    try {
      if (jugador) {
        const jugadorActualizado = await actualizarEstadoJugador(jugador.playerId, nuevoEstado);
        setJugador(jugadorActualizado);
      }
    } catch (err) {
      const error = err as Error; // Convertir a tipo Error
      console.error('Error al actualizar el estado del jugador:', error);
      setError('Error al actualizar el estado del jugador');
    }
  };

  if (error) return <div>Hubo un error: {error}</div>;
  if (!jugador) return <div>Cargando...</div>;

  return (
    <div id="datosSocio" className="flex flex-col lg:flex-row gap-5 mt-5 p-5 border rounded-lg shadow-lg bg-white">
      <div className="flex flex-col items-center lg:items-start">
        <AvatarATL 
          urlPhoto={jugador.playerPhotoUrl || '/images/avatar.png'} 
          entityId={jugador.playerId} 
          entityType="jugador" 
          updatePhotoFunction={actualizarFoto}
          sizeButton={20}
          wide='w-40'
          height='h-40'
        />
      </div>
      <div id="FichaDatos" className="lg:basis-3/5">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold text-black mb-2">
            {jugador.playerFirstName} {jugador.playerLastName} {jugador.playerSecondLastName}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">ID: {jugador.playerId}</h2>
          <h3 className="text-xl font-semibold text-blue-800 mb-1">{jugador.categoria}</h3>
          <h4 className="text-lg font-medium text-green-600">Status: {jugador.status}</h4>
          <div className="mt-2">
            <label className="block text-gray-700 font-bold mb-1" htmlFor="estado">
              Cambiar Estado:
            </label>
            <select
              id="estado"
              value={nuevoEstado}
              onChange={handleEstadoChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Selecciona un estado
              </option>
              {Object.values(Status_Jugador).map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Información Personal</h2>
          <p><strong>Fecha de Nacimiento:</strong> {new Date(jugador.fechaNacimiento).toLocaleDateString()}</p>
          <p><strong>Teléfono:</strong> {jugador.playerCellPhone || 'No disponible'}</p>
          <p><strong>Email:</strong> {jugador.playerEmail || 'No disponible'}</p>
          <p><strong>País de Nacimiento:</strong> {jugador.paisNacimiento}</p>
          <p><strong>Estado de Nacimiento:</strong> {jugador.estadoNacimiento}</p>
          <p><strong>Ciudad de Nacimiento:</strong> {jugador.ciudadNacimiento}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Información Escolar</h2>
          <p><strong>Nivel Escolar:</strong> {jugador.schoolarLevel}</p>
          <p><strong>Grado Escolar:</strong> {jugador.schoolarGrade}</p>
          <p><strong>Escuela:</strong> {jugador.school}</p>
        </div>
      </div>
      <div className="hidden md:block lg:basis-1/5">
        <h1 className="text-xl text-center font-bold text-blue-900 mb-4">Acciones</h1>
        <div className="flex flex-col items-center">
          <Link href={`/editar-jugador/${jugador.playerId}`} className="text-blue-600 hover:underline">
            Editar Jugador
          </Link>
          <Link href={`/eliminar-jugador/${jugador.playerId}`} className="text-red-600 hover:underline mt-2">
            Eliminar Jugador
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpedienteJugador;
