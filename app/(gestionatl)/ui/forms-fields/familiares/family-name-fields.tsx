

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
        <label htmlFor="familyFirstName" className='ml-6'>Nombres:</label>
        <input {...register("familyFirstName")} id="familyFirstName" placeholder="Nombre" className='input input-bordered input-info w-full max-w-xl' />
        

      </div>
      <div id='apellidos' className='grid grid-cols-2 w-3/4 mx-auto gap-5' >
        <div id='familyLastName'>
          <label htmlFor="familyLastName" className='ml-6'>Apellido Paterno</label> <br />
          <input {...register("familyLastName")} id="familyLastName" className='input input-bordered input-info w-full max-w-xl ' placeholder="Apellido" />
          
        </div>
        <div id='SecondLastNameDiv'>
          <label htmlFor="familySecondLastName" className='ml-6'>Apellido Materno (opcional)</label> <br />
          <input {...register("familySecondLastName")} id="familySecondLastName" className='input input-bordered input-info w-full max-w-xl' placeholder="Segundo Apellido" />
          
        </div>
      </div>
    </div>
  );
};

export default FamilyNameFields;
