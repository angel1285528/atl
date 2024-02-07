'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const MesAlta = () => {
  const { control } = useForm();

  // Lógica para generar opciones de meses desde octubre de 2021 hasta el mes actual
  const generateMonthOptions = () => {
    const options = [];
    const currentDate = new Date();
    const startMonth = new Date('October 2021');

    let currentMonth = new Date(currentDate); // Comenzar desde el mes actual y retroceder

    while (currentMonth >= startMonth) {
      const formattedMonth = new Intl.DateTimeFormat('es-ES', {
        month: 'long',
        year: 'numeric',
      }).format(currentMonth);

      options.unshift({
        label: formattedMonth,
        value: currentMonth.toISOString().slice(0, 7), // Formato YYYY-MM
      });

      // Retroceder al mes anterior
      currentMonth.setMonth(currentMonth.getMonth() - 1);
    }

    return options.reverse(); // Revertir el orden para mostrar los meses más recientes primero
  };

  return (
    
      <div className='w-3/4 flex flex-col mx-auto'>
        <label className='ml-6'>Selecciona un mes:</label>
        <Controller
          name="selectedMonth"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} className='input input-bordered input-info w-full'>
              <option value="" disabled>
                Elige un mes
              </option>
              {generateMonthOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      </div>
    
  );
};

export default MesAlta;



