

import React from 'react';
import { useFormContext } from 'react-hook-form';

const FechaRegistro: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div id='container'>
        <label htmlFor="fechaRegistro" className='ml-6'>Fecha Registro</label>
        <input type='date' {...register("fechaRegistro")} id='fechaRegistro' className='input input-bordered input-info w-full max-w-xl' />
     </div>
       )
};

export default FechaRegistro;
