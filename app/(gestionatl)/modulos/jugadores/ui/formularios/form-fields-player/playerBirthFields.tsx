

import React from 'react';
import { useFormContext } from 'react-hook-form';

const PlayerBirthFields: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div id='container'>
      <div id="curp" className='w-3/4 flex flex-col mx-auto'>
        <label htmlFor="playerCurp" className='ml-6'>Curp:</label>
        <input {...register("playerCurp")} id="playerCurp" placeholder="Nombre" className='input input-bordered input-info w-full max-w-xl' />
       

      </div>
      <div id='fechaNacimientoCategoria' className='grid grid-cols-2 w-3/4 mx-auto gap-5' >
        <div id='fechaNacimiento'>
          <label htmlFor="fechaNacimiento" className='ml-6'>Fecha de Nacimiento</label> <br />
          <input {...register("fechaNacimiento")} type="date" id="fechaNacimiento" className='input input-bordered input-info w-full max-w-xl ' placeholder="Apellido" />
       
        </div>
        <div id='Categoria'>
          <label htmlFor="categoria" className='ml-6'>Categoria</label> <br />
          <input {...register("categoria")} id="categoria" className='input input-bordered input-info w-full max-w-xl' placeholder="Segundo Apellido" />
       
        </div>
      </div>
    </div>
  );
};

export default PlayerBirthFields;