'use client'
import React, { useState } from 'react';
import DateRangeSelector from './DateRangeSelector';
import DaySelector from './daySelector';
import ClassSelector from './classSelector';
import ScheduleSummary from './scheduleSummary';
import { toast } from "react-toastify";

const FormularioJornadas: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/jornadas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startDate, endDate, selectedDays, selectedClasses }),
      });

      if (!response.ok) {
        throw new Error('Error al crear las jornadas');
      }

      const result = await response.json();
      toast.success("Jornadas creadas con éxito", {
        position: "bottom-center",
        autoClose: 4000,
      });
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      toast.error("Error al crear las jornadas");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Programar Jornadas de Entrenamiento</h2>
      <DateRangeSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <DaySelector selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
      <ClassSelector selectedClasses={selectedClasses} setSelectedClasses={setSelectedClasses} />
      <ScheduleSummary startDate={startDate} endDate={endDate} selectedDays={selectedDays} selectedClasses={selectedClasses} />
      <div className="flex justify-center">
        <button onClick={handleSubmit} disabled={isSubmitting} className="btn btn-primary bg-amber-400 text-white w-1/2 my-6">
          {isSubmitting ? 'Registrando...' : 'Registrar Jornadas'}
        </button>
      </div>
    </div>
  );
};

export default FormularioJornadas;
