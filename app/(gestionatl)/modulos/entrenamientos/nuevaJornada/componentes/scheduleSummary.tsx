import React from 'react';

interface ScheduleSummaryProps {
  startDate: Date;
  endDate: Date;
  selectedDays: string[];
  selectedClasses: string[];
}

const ScheduleSummary: React.FC<ScheduleSummaryProps> = ({ startDate, endDate, selectedDays, selectedClasses }) => {
  return (
    <div className="my-4">
      <h3 className="text-center text-xl font-bold">Resumen de la Programación</h3>
      <p><strong>Inicio:</strong> {startDate.toLocaleDateString()}</p>
      <p><strong>Fin:</strong> {endDate.toLocaleDateString()}</p>
      <p><strong>Días Seleccionados:</strong> {selectedDays.join(', ')}</p>
      <p><strong>Clases Seleccionadas:</strong> {selectedClasses.join(', ')}</p>
    </div>
  );
};

export default ScheduleSummary;
