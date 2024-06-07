'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createEntrenamientos } from '@/app/(gestionatl)/modulos/jugadores/lib/crud/crearEntrenamiento';


const IniciarEntrenamientoButton: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const iniciarSesionEntrenamiento = async () => {
    setLoading(true);
    try {
      const newEntrenamiento = await createEntrenamientos({
        fechaJornadaEntrenamiento: new Date(),
      });
      setLoading(false);
      console.log('Entrenamiento creado:', newEntrenamiento);
      router.push(`/modulos/entrenamientos/currentSesion/${newEntrenamiento.idJornadaEntrenamiento}`);
    } catch (error) {
      setLoading(false);
      console.error('Error iniciando sesión de entrenamiento:', error);
    }
  };

  return (
    <button 
    onClick={iniciarSesionEntrenamiento} 
    disabled={loading}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {loading ? 'Iniciando...' : 'Iniciar Sesión de Entrenamiento'}
  </button>
  );
};

export default IniciarEntrenamientoButton;
