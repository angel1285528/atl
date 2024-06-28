'use client';
import React, { useState, useEffect } from 'react';
import { JornadaEntrenamiento, Clases } from "@prisma/client";
import { fetchJornadas, fetchClases, programarClaseEnJornada } from "@/app/lib/crud/crudClases";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TablaProgramacionClases: React.FC = () => {
  const [jornadas, setJornadas] = useState<JornadaEntrenamiento[]>([]);
  const [clases, setClases] = useState<Clases[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
  const [startJornada, setStartJornada] = useState<string>("");
  const [endJornada, setEndJornada] = useState<string>("");
  const [filteredJornadas, setFilteredJornadas] = useState<JornadaEntrenamiento[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const jornadasData = await fetchJornadas();
      const clasesData = await fetchClases();
      setJornadas(jornadasData);
      setClases(clasesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (startJornada) {
      const startIndex = jornadas.findIndex(j => j.idJornadaEntrenamiento === parseInt(startJornada));
      const endIndex = endJornada ? jornadas.findIndex(j => j.idJornadaEntrenamiento === parseInt(endJornada)) : jornadas.length - 1;
      setFilteredJornadas(jornadas.slice(startIndex, endIndex + 1));
    }
  }, [startJornada, endJornada, jornadas]);

  const handleCheckboxChange = (jornadaId: number, claseId: string) => {
    const key = `${jornadaId}-${claseId}`;
    setSelected(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectAll = (type: 'row' | 'column', id: number | string) => {
    const newSelected = { ...selected };
    if (type === 'row') {
      filteredJornadas.forEach(jornada => {
        const key = `${jornada.idJornadaEntrenamiento}-${id}`;
        newSelected[key] = true;
      });
    } else if (type === 'column') {
      clases.forEach(clase => {
        const key = `${id}-${clase.idClase}`;
        newSelected[key] = true;
      });
    }
    setSelected(newSelected);
  };

  const handleSave = async () => {
    try {
      // Lógica para programar las clases seleccionadas en las jornadas
      const promises = Object.keys(selected).map(key => {
        const [jornadaId, claseId] = key.split('-');
        if (selected[key]) {
          return programarClaseEnJornada(parseInt(jornadaId), claseId);
        }
        return null;
      }).filter(Boolean);
      await Promise.all(promises);
      toast.success('Programación guardada exitosamente');
    } catch (error) {
      console.error("Error al guardar la programación:", error);
      toast.error('Error al guardar la programación');
    }
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('es-MX', options);
  };

  return (
    <div>
      <ToastContainer />
      <h2>Programar Clases en Jornadas</h2>
      <div className="mb-4">
        <label htmlFor="startJornada">Fecha de Inicio:</label>
        <select
          id="startJornada"
          value={startJornada}
          onChange={(e) => setStartJornada(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Seleccione una jornada</option>
          {jornadas.map(jornada => (
            <option key={jornada.idJornadaEntrenamiento} value={jornada.idJornadaEntrenamiento}>
              {formatDate(jornada.fechaJornadaEntrenamiento)}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="endJornada">Fecha de Fin:</label>
        <select
          id="endJornada"
          value={endJornada}
          onChange={(e) => setEndJornada(e.target.value)}
          className="border p-2 rounded-md"
          disabled={!startJornada}
        >
          <option value="">Seleccione una jornada</option>
          {jornadas
            .filter(j => j.idJornadaEntrenamiento > parseInt(startJornada))
            .map(jornada => (
              <option key={jornada.idJornadaEntrenamiento} value={jornada.idJornadaEntrenamiento}>
                {formatDate(jornada.fechaJornadaEntrenamiento)}
              </option>
            ))}
        </select>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Clases</th>
            {filteredJornadas.map(jornada => (
              <th key={jornada.idJornadaEntrenamiento}>{formatDate(jornada.fechaJornadaEntrenamiento)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clases.map(clase => (
            <tr key={clase.idClase}>
              <td>
                {clase.idClase}
                <br />
                {clase.tipo}
              </td>
              {filteredJornadas.map(jornada => (
                <td key={jornada.idJornadaEntrenamiento}>
                  <input
                    type="checkbox"
                    checked={selected[`${jornada.idJornadaEntrenamiento}-${clase.idClase}`] || false}
                    onChange={() => handleCheckboxChange(jornada.idJornadaEntrenamiento, clase.idClase)}
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
