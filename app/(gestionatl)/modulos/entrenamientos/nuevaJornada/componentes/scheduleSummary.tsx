import React from 'react';

interface ScheduleSummaryProps {
  startDate: Date | null;
  endDate: Date | null;
  selectedDays: string[];
  selectedClasses: string[];
}

const ScheduleSummary: React.FC<ScheduleSummaryProps> = ({ startDate, endDate, selectedDays, selectedClasses }) => {
  return (
    <div className="my-4">
      <h3 className="text-center text-xl font-bold">Resumen de la Programación</h3>
      <p><strong>Inicio:</strong> {startDate ? startDate.toLocaleDateString() : 'No seleccionado'}</p>
      <p><strong>Fin:</strong> {endDate ? endDate.toLocaleDateString() : 'No seleccionado'}</p>
      <p><strong>Días Seleccionados:</strong> {selectedDays.join(', ')}</p>
      <p><strong>Clases Seleccionadas:</strong> {selectedClasses.join(', ')}</p>
    </div>
  );
};

export default ScheduleSummary;
