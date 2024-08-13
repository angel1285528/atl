'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { finalizarJornada } from '@/app/lib/crud/crudJornada';
import { updateAttendanceRecords } from '../lib/crudAsistencia';
import { Button } from '@/components/ui/button';

interface FinalizarEntrenamientoButtonProps {
  idJornadaEntrenamiento: number;
}

const FinalizarEntrenamientoButton: React.FC<FinalizarEntrenamientoButtonProps> = ({ idJornadaEntrenamiento }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFinalizarEntrenamiento = async () => {
    setIsLoading(true);
    try {
      // First, update the attendance records
      await updateAttendanceRecords(idJornadaEntrenamiento);
      
      // Then, finalize the jornada
      await finalizarJornada(idJornadaEntrenamiento);
      
      // Finally, redirect to the bitacora page
      router.push(`/modulos/entrenamientos/bitacora/${idJornadaEntrenamiento}`);
    } catch (error) {
      console.error('Error finalizando la jornada de entrenamiento:', error);
      // You might want to show an error message to the user here
      alert('Hubo un error al finalizar el entrenamiento. Por favor, inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleFinalizarEntrenamiento}
      disabled={isLoading}
      className="bg-green-500 text-white mt-4"
    >
      {isLoading ? 'Finalizando...' : 'Finalizar Entrenamiento'}
    </Button>
  );
};

export default FinalizarEntrenamientoButton;