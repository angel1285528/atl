'use client';

import React, { useState, useEffect } from "react";
import { JornadaEntrenamiento } from "@prisma/client";
import { CreateManyJornadas } from "@/app/lib/crud/crudJornada";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';


registerLocale('es', es as any);

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const FormularioJornadas: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
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

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const date = new Date(d);
      if (selectedDays.includes(daysOfWeek[date.getDay() - 1])) {
        jornadas.push({
          fechaJornadaEntrenamiento: date,
          horaInicioJornada: startTime,
          horaFinJornada: endTime,
          lugarJornada: "",
          bitacoraJornada: "",
          estado: "Programada"
        });
      }
    }

    try {
      await CreateManyJornadas(jornadas);
      toast.success('Entrenamientos creados exitosamente');
      router.push('/modulos/entrenamientos/nuevaClase');
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

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 gap-4">
          <div id="fehasyhorarioPeriodo">
          <h3 className=" text-lg md:text-2xl font-bold ml-10">Fechas del periodo a programar</h3>
            <div className="flex flex-row ml-20 mt-5">
              <div className="flex flex-row">
                <label className="font-bold text-xl mr-3">Fecha de inicio:</label>
                <DatePicker 
                  selected={startDate} 
                  onChange={(date: Date | null) => setStartDate(date)} 
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  className="input mr-5"
                  required
                />
              </div>
             <div className="flex flex-row">
                <label className="font-bold text-xl mr-3">Fecha de fin:</label>
                <DatePicker 
                  selected={endDate} 
                  onChange={(date: Date | null) => setEndDate(date)} 
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  className="input mr-5"
                  required
                />
              </div>
              
          </div>
          <h3 className=" text-lg md:text-2xl font-bold mt-3 ml-10">Horarios a programar entrenamientos en el periodo</h3>
          <div id="horariosPeriodo" className="flex flex-row ml-20 mt-5" >
          <div className="flex flex-row">
                <label className="font-bold text-xl mr-3">Hora de inicio:</label>
                <input 
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="input mr-5 w-48"
                  required
                />
              </div>
              <div className="flex flex-row">
                <label className="font-bold text-xl mr-3">Hora de fin:</label>
                <input 
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="input mr-5 w-48"
                  required
                />
              </div>
            </div>

          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 ml-10">Días de Entrenamiento</h3>
            <div className="flex flex-row space-x-4 ml-20">
              {daysOfWeek.map(day => (
                <div key={day} className="flex items-center space-x-2">
                  <Checkbox 
                    id={day}
                    checked={selectedDays.includes(day)}
                    onCheckedChange={() => handleDaySelection(day)}
                    className="bg-white border-amber-400 w-5 h-5"
                  />
                  <label
                    htmlFor={day}
                    className="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {day}
                  </label>
                </div>
              ))}
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
