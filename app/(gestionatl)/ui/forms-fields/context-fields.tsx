'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';



const ContextFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="work">Ocupación: </label> <br />
      <input {...register('work')} placeholder="Ocupación" className="input input-bordered input-info w-full max-w-xs" />
      <br />

      <label htmlFor="scholarity">Máximo Grado de Estudios </label>
      <select {...register('scholarity')} id='scholarity' name='scholarity' className="input input-bordered input-info w-full max-w-xs">
      <option value="" disabled selected>Seleccione su máximo grado de estudios</option>
        <option value="Primaria">Primaria</option>
        <option value="Secundaria">Secundaria</option>
        <option value="Bachillerato">Bachillerato</option>
        <option value="Licenciatura">Licenciatura</option>
        <option value="Posgrado">Posgrado</option>
        </select>
        
      
      <br />
      </div>

    
    );
  };  
  export default ContextFields;

