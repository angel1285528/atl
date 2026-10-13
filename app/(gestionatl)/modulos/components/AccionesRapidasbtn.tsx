import React from 'react';
import GenericLinkButton from './dashboard/GenericLinkButton';
import { PlayIcon } from 'lucide-react';
import { FaFileInvoice } from 'react-icons/fa';

const Acciones = [
  { text: 'Jornada de Entrenamiento', url: '/entrenamientos', icon: <PlayIcon /> },
  { text: 'Estados de cuenta', url: '/', icon: <FaFileInvoice /> },
];

const AccionesRapidas: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
      {Acciones.map((accion, index) => (
        <GenericLinkButton key={index} text={accion.text} url={accion.url} icon={accion.icon} />
      ))}
    </div>
  );
};

export default AccionesRapidas;
