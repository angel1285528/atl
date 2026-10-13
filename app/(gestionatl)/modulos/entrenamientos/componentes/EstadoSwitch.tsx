"use client";
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { updateTemporadaEstado } from '../../temporadas/lib/updateTemporadaEstado';
import { toast } from 'react-toastify';

interface EstadoSwitchProps {
  idPeriodo: number;
  initialEstado: boolean;
}

const EstadoSwitch: React.FC<EstadoSwitchProps> = ({ idPeriodo, initialEstado }) => {
  const [isChecked, setIsChecked] = useState(initialEstado);

  const handleChange = async (checked: boolean) => {
    setIsChecked(checked);
    try {
      await updateTemporadaEstado(idPeriodo, checked);
      toast.success(`Estado actualizado a ${checked ? 'Activo' : 'Inactivo'}`);
    } catch (error) {
      console.error("Error updating estado", error);
      setIsChecked(initialEstado); // Revertir el cambio si hay un error
      toast.error("Error al actualizar el estado");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Switch checked={isChecked} onCheckedChange={handleChange} />
      <span className="mt-2 text-sm font-bold">{isChecked ? 'Activo' : 'Inactivo'}</span>
    </div>
  );
};

export default EstadoSwitch;
