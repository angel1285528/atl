
import React from 'react';
import { useFormContext } from 'react-hook-form';

const NameFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div id='container'>
      <div id="firstNameDiv" className='w-3/4 flex flex-col mx-auto'>
        <label htmlFor="socioFirstName" className='ml-6'>Nombres:</label>
        <input {...register("firstName")} id="socioFirstName" name='firstName' placeholder="Nombre" className='input input-bordered input-info w-full max-w-xl' />

      </div>
      <div id='apellidos' className='grid grid-cols-2 w-3/4 mx-auto gap-5' >
        <div id='lastNameDiv'>
          <label htmlFor="socioLastName" className='ml-6'>Apellido Paterno</label> <br />
          <input {...register("lastName")} id="socioLastName" className='input input-bordered input-info w-full max-w-xl ' placeholder="Apellido" />
        </div>
        <div id='SecondLastNameDiv'>
          <label htmlFor="socioSecondLastName" className='ml-6'>Apellido Materno (opcional)</label> <br />
          <input {...register("secondLastName")} id="socioSecondLastName" className='input input-bordered input-info w-full max-w-xl' placeholder="Segundo Apellido" />
        </div>
      </div>
    </div>
  );
};

export default NameFields;
