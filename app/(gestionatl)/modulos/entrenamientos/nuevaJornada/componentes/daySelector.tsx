import React from 'react';

interface DaySelectorProps {
  selectedDays: string[];
  setSelectedDays: React.Dispatch<React.SetStateAction<string[]>>;
}

const daysOfWeek = [
  { label: 'Lunes', value: 'monday' },
  { label: 'Martes', value: 'tuesday' },
  { label: 'Miércoles', value: 'wednesday' },
  { label: 'Jueves', value: 'thursday' },
  { label: 'Viernes', value: 'friday' },
  { label: 'Sábado', value: 'saturday' },
  { label: 'Domingo', value: 'sunday' }
];

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDays, setSelectedDays }) => {
  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex justify-center my-4">
      {daysOfWeek.map((day) => (
        <div key={day.value} className="mx-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedDays.includes(day.value)}
              onChange={() => toggleDay(day.value)}
            />
            <span className="ml-2">{day.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default DaySelector;
