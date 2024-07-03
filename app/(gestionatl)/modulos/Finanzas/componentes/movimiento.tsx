'use client'
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { getAllSocios, getJugadoresBySocioId, getAllConceptos } from '../lib/crudFinanzas';
import { socio, jugador, conceptosMovimientos } from '@prisma/client';

interface MovimientoFormValues {
  socioId: string;
  jugadorIds: string[];
  conceptoId: string;
  importe: number;
}

const MovimientoForm: React.FC = () => {
  const methods = useForm<MovimientoFormValues>();
  const { register, handleSubmit, reset, control } = methods;
  const socioId = useWatch({ control, name: 'socioId' });

  const [socios, setSocios] = useState<socio[]>([]);
  const [jugadores, setJugadores] = useState<jugador[]>([]);
  const [conceptos, setConceptos] = useState<conceptosMovimientos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [sociosData, conceptosData] = await Promise.all([
        getAllSocios(),
        getAllConceptos(),
      ]);
      setSocios(sociosData);
      setConceptos(conceptosData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (socioId) {
      const fetchJugadores = async () => {
        const jugadoresData = await getJugadoresBySocioId(socioId);
        setJugadores(jugadoresData);
      };
      fetchJugadores();
    } else {
      setJugadores([]);
    }
  }, [socioId]);

  const onSubmit = (data: MovimientoFormValues) => {
    console.log('Datos del movimiento:', data);
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="socioId" className="block text-sm font-medium text-gray-700">
            Socio
          </label>
          <select
            {...register('socioId', { required: true })}
            id="socioId"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Selecciona un socio</option>
            {socios.map((socio) => (
              <option key={socio.id} value={socio.id}>
                {socio.firstName} {socio.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="jugadorIds" className="block text-sm font-medium text-gray-700">
            Jugadores
          </label>
          <select
            {...register('jugadorIds', { required: true })}
            id="jugadorIds"
            multiple
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            {jugadores.map((jugador) => (
              <option key={jugador.playerId} value={jugador.playerId}>
                {jugador.playerFirstName} {jugador.playerLastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="conceptoId" className="block text-sm font-medium text-gray-700">
            Concepto
          </label>
          <select
            {...register('conceptoId', { required: true })}
            id="conceptoId"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Selecciona un concepto</option>
            {conceptos.map((concepto) => (
              <option key={concepto.idConceptoMovimiento} value={concepto.idConceptoMovimiento}>
                {concepto.concepto}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="importe" className="block text-sm font-medium text-gray-700">
            Importe
          </label>
          <input
            {...register('importe', { required: true })}
            type="number"
            id="importe"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Agregar Movimiento
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MovimientoForm;
