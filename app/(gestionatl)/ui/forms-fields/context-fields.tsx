'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './errorComponent';

const ContextFields: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-3/4 gap-5 mx-auto'>
      <div className='flex flex-col'>
        <label htmlFor="socioWork" className='mb-2 font-extrabold'>Ocupación:</label>
        <input {...register('work')} id='socioWork' placeholder="Ocupación" className="input input-bordered input-info w-full max-w-xs" />
        <ErrorMessage error={errors.work} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="socioScholarity" className='mb-2 font-extrabold'>Máximo Grado de Estudios:</label>
        <select {...register('scholarity')} defaultValue="" id='socioScholarity' name='scholarity' className="input input-bordered input-info w-full max-w-xs">
          <option value="" disabled>Seleccione su máximo grado de estudios</option>
          <option value="Primaria">Primaria</option>
          <option value="Secundaria">Secundaria</option>
          <option value="Bachillerato">Bachillerato</option>
          <option value="Licenciatura">Licenciatura</option>
          <option value="Posgrado">Posgrado</option>
        </select>
        <ErrorMessage error={errors.scholarity} />
      </div>
    </div>
  );
};  
export default ContextFields;
