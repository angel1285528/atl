'use client';

import React, { useState, useEffect } from "react";
import { JornadaEntrenamiento } from "@prisma/client";
import { createManyJornadas } from "@/app/lib/crud/crudJornada";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

registerLocale('es', es as any);

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const FormularioJornadas: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDaySelection = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const jornadas: Omit<JornadaEntrenamiento, 'idJornadaEntrenamiento'>[] = [];
    
    if (!startDate || !endDate || !startTime || !endTime) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    const startHour = new Date(`1970-01-01T${startTime}:00Z`);
    const endHour = new Date(`1970-01-01T${endTime}:00Z`);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const date = new Date(d);
      if (selectedDays.includes(daysOfWeek[date.getDay() - 1])) {
        jornadas.push({
          fechaJornadaEntrenamiento: date,
          horaInicioJornada: startHour,
          horaFinJornada: endHour,
          bitacoraJornada: "",
          estado: "Programada"
        });
      }
    }

    try {
      await createManyJornadas(jornadas);
      toast.success('Entrenamientos creados exitosamente');
      router.push('/modulos/entrenamientos');
    } catch (error) {
      console.error("Error creando jornadas de entrenamiento:", error);
      toast.error('Hubo un error al crear los entrenamientos');
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <>
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-center mb-6">Programar Entrenamientos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Días de Entrenamiento</h3>
            <div className="flex flex-col space-y-2">
              {daysOfWeek.map(day => (
                <div key={day} className="flex items-center space-x-2">
                  <Checkbox 
                    id={day}
                    checked={selectedDays.includes(day)}
                    onCheckedChange={() => handleDaySelection(day)}
                  />
                  <label
                    htmlFor={day}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Periodo y Horario</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label>Fecha de inicio:</label>
                <DatePicker 
                  selected={startDate} 
                  onChange={(date: Date | null) => setStartDate(date)} 
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  className="input"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Fecha de fin:</label>
                <DatePicker 
                  selected={endDate} 
                  onChange={(date: Date | null) => setEndDate(date)} 
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  className="input"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Hora de inicio:</label>
                <TimePicker 
                  value={startTime}
                  onChange={setStartTime}
                  disableClock={true}
                  format="HH:mm"
                  locale="es"
                  className="w-full"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Hora de fin:</label>
                <TimePicker 
                  value={endTime}
                  onChange={setEndTime}
                  disableClock={true}
                  format="HH:mm"
                  locale="es"
                  className="w-full"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit" className="bg-blue-600 text-white">Programar Jornadas</Button>
        </div>
      </form>
    </>
  );
};

export default FormularioJornadas;
