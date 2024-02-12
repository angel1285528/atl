import React from 'react';
import { useFormContext } from 'react-hook-form';

const PlayerNameFields: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div id='container'>
      <div id="firstName" className='w-3/4 flex flex-col mx-auto'>
        <label htmlFor="playerFirstName" className='ml-6'>Nombres:</label>
        <input {...register("playerFirstName")} id="playerFirstName" placeholder="Nombre" className='input input-bordered input-info w-full max-w-xl' />
        {errors.socioFirstName && <span className='text-red-500'>El nombre es requerido</span>}

      </div>
      <div id='apellidos' className='grid grid-cols-2 w-3/4 mx-auto gap-5' >
        <div id='lastNameDiv'>
          <label htmlFor="playerLastName" className='ml-6'>Apellido Paterno</label> <br />
          <input {...register("playerLastName")} id="playerLastName" className='input input-bordered input-info w-full max-w-xl ' placeholder="Apellido" />
          {errors.socioLastName && <span className='text-red-500'>El apellido es requerido</span>}
        </div>
        <div id='SecondLastNameDiv'>
          <label htmlFor="playerSecondLastName" className='ml-6'>Apellido Materno (opcional)</label> <br />
          <input {...register("playerSecondLastName")} id="playerSecondLastName" className='input input-bordered input-info w-full max-w-xl' placeholder="Segundo Apellido" />
          {errors.socioSecondLastName && <span className='text-red-500'>El apellido es requerido</span>}
        </div>
      </div>
    </div>
  );
};

export default PlayerNameFields;
