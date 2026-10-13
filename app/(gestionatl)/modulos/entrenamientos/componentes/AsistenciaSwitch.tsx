"use client";
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { updateAsistencia } from '../lib/crudAsistencia';
import { toast } from 'react-toastify';

interface AsistenciaSwitchProps {
  jugadorId: string;
  jornadaId: number;
  claseId: string;
  initialAsistencia: boolean;
}

const AsistenciaSwitch: React.FC<AsistenciaSwitchProps> = ({ jugadorId, jornadaId, claseId, initialAsistencia }) => {
  const [isChecked, setIsChecked] = useState(initialAsistencia);

  const handleChange = async (checked: boolean) => {
    setIsChecked(checked);
    try {
      await updateAsistencia(jugadorId, jornadaId, claseId, checked);
      toast.success(`Asistencia actualizada a ${checked ? 'Presente' : 'Ausente'}`);
    } catch (error) {
      console.error("Error updating asistencia", error);
      setIsChecked(initialAsistencia); // Revertir el cambio si hay un error
      toast.error("Error al actualizar la asistencia");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Switch checked={isChecked} onCheckedChange={handleChange} />
      
    </div>
  );
};

export default AsistenciaSwitch;
