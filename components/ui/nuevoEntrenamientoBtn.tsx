'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createEntrenamientos } from '@/app/(gestionatl)/modulos/jugadores/lib/crud/crearEntrenamiento';
import { PlayIcon } from 'lucide-react';

interface GenericButtonProps {
  buttonFunction: (() => void) | null;
  urlRoute: string;
  icon?: React.ReactNode | null;
  name: string;
}

const IniciarEntrenamientoButton: React.FC<GenericButtonProps> = ({ buttonFunction, icon, name, urlRoute }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (buttonFunction) {
      setLoading(true);
      buttonFunction();
      setLoading(false);
    } else {
      router.push(urlRoute);
    }
  };

  return (
    <button 
      onClick={handleClick} 
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {icon}
      {loading ? 'Iniciando...' : name}
    </button>
  );
};

export default IniciarEntrenamientoButton;
