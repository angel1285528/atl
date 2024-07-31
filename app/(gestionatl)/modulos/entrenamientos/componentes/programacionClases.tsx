'use client';
import React, { useState, useEffect } from 'react';
import { JornadaEntrenamiento, Clases } from "@prisma/client";
import { fetchJornadasProgramadas, fetchClases, programarClasesEnJornadas } from "@/app/lib/crud/crudClases";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Checkbox } from "@/components/ui/checkbox";

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const TablaProgramacionClases: React.FC = () => {
  const [jornadas, setJornadas] = useState<JornadaEntrenamiento[]>([]);
  const [clases, setClases] = useState<Clases[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [startJornada, setStartJornada] = useState<string>("");
  const [endJornada, setEndJornada] = useState<string>("");
  const [daysWithClasses, setDaysWithClasses] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const jornadasData = await fetchJornadasProgramadas();
      const clasesData = await fetchClases();
      setJornadas(jornadasData);
      setClases(clasesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (startJornada && endJornada) {
      const start = new Date(startJornada);
      const end = new Date(endJornada);
      const daysSet = new Set<number>();

      jornadas.forEach(jornada => {
        const jornadaDate = new Date(jornada.fechaJornadaEntrenamiento);
        if (jornadaDate >= start && jornadaDate <= end) {
          daysSet.add(jornadaDate.getDay());
        }
      });

      setDaysWithClasses(Array.from(daysSet).sort((a, b) => (a === 0 ? 7 : a) - (b === 0 ? 7 : b)));
    }
  }, [startJornada, endJornada, jornadas]);

  const handleCheckboxChange = (dayIndex: number, claseId: string) => {
    const key = `${dayIndex}-${claseId}`;
    setSelected(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = async () => {
    try {
      const registros: { jornadaId: number, claseId: string }[] = [];
      Object.keys(selected).forEach(key => {
        const [dayIndex, claseId] = key.split('-');
        if (selected[key]) {
          jornadas.forEach(jornada => {
            const jornadaDate = new Date(jornada.fechaJornadaEntrenamiento);
            if (jornadaDate.getDay() === parseInt(dayIndex) &&
              jornadaDate >= new Date(startJornada) &&
              jornadaDate <= new Date(endJornada)) {
              registros.push({ jornadaId: jornada.idJornadaEntrenamiento, claseId });
            }
          });
        }
      });

      await programarClasesEnJornadas(registros);
      toast.success('Programación guardada exitosamente');
    } catch (error) {
      console.error("Error al guardar la programación:", error);
      toast.error('Error al guardar la programación');
    }
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <div className="mb-4">
        <label htmlFor="startJornada" className="block text-lg font-semibold">Fecha de Inicio:</label>
        <input
          type="date"
          id="startJornada"
          value={startJornada}
          onChange={(e) => setStartJornada(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="endJornada" className="block text-lg font-semibold">Fecha de Fin:</label>
        <input
          type="date"
          id="endJornada"
          value={endJornada}
          onChange={(e) => setEndJornada(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
      </div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">Clases</th>
            {daysWithClasses.map(dayIndex => (
              <th key={dayIndex} className="px-4 py-2 bg-gray-200">{daysOfWeek[dayIndex - 1]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clases.map((clase, claseIndex) => (
            <tr key={clase.idClase} className={claseIndex % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 font-bold text-2xl">{clase.tipo}</td>
              {daysWithClasses.map(dayIndex => (
                <td key={dayIndex} className="px-4 py-2">
                  <Checkbox
                    checked={selected[`${dayIndex}-${clase.idClase}`] || false}
                    onCheckedChange={() => handleCheckboxChange(dayIndex, clase.idClase)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Guardar Programación
        </button>
      </div>
    </div>
  );
};

export default TablaProgramacionClases;
