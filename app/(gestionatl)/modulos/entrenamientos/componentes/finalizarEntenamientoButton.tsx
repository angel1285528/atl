// app/(gestionatl)/modulos/entrenamientos/components/FinalizarEntrenamientoButton.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { finalizarJornada } from '@/app/lib/crud/crudJornada';
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
      await finalizarJornada(idJornadaEntrenamiento);
      router.push(`/modulos/entrenamientos/bitacora/${idJornadaEntrenamiento}`);
    } catch (error) {
      console.error('Error finalizando la jornada de entrenamiento:', error);
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
