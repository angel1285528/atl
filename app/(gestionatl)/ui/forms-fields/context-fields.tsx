'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';



const ContextFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div className='grid grid-cols-2 w-3/4 gap-5 mx-auto'>
      <div className=''>
      <label htmlFor="socioWork" className='ml-6'>Ocupación: </label> <br />
      <input {...register('work')} id='socioWork' placeholder="Ocupación" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <label htmlFor="socioScholarity" className='ml-6'>Máximo Grado de Estudios </label>
      <select {...register('scholarity')} defaultValue="" id='socioScholarity' name='scholarity' className="input input-bordered input-info w-full max-w-xs">
      <option value="" disabled>Seleccione su máximo grado de estudios</option>
        <option value="Primaria">Primaria</option>
        <option value="Secundaria">Secundaria</option>
        <option value="Bachillerato">Bachillerato</option>
        <option value="Licenciatura">Licenciatura</option>
        <option value="Posgrado">Posgrado</option>
        </select>
        </div>
      </div>

    
    );
  };  
  export default ContextFields;

