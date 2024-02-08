

import React from 'react';
import { useFormContext } from 'react-hook-form';

const FamilyNameFields: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div id='container'>
      <div id="firstName" className='w-3/4 flex flex-col mx-auto'>
        <label htmlFor="FamilyFirstName" className='ml-6'>Nombres:</label>
        <input {...register("FamilyFirstName")} id="FamilyFirstName" placeholder="Nombre" className='input input-bordered input-info w-full max-w-xl' />
        

      </div>
      <div id='apellidos' className='grid grid-cols-2 w-3/4 mx-auto gap-5' >
        <div id='FamilyFirstName'>
          <label htmlFor="FamilyFirstName" className='ml-6'>Apellido Paterno</label> <br />
          <input {...register("FamilyFirstName")} id="FamilyFirstName" className='input input-bordered input-info w-full max-w-xl ' placeholder="Apellido" />
          
        </div>
        <div id='SecondLastNameDiv'>
          <label htmlFor="FamilySecondLastName" className='ml-6'>Apellido Materno (opcional)</label> <br />
          <input {...register("FamilySecondLastName")} id="FamilySecondLastName" className='input input-bordered input-info w-full max-w-xl' placeholder="Segundo Apellido" />
          
        </div>
      </div>
    </div>
  );
};

export default FamilyNameFields;
