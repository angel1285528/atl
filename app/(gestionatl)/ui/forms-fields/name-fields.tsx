import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './errorComponent';

const NameFields: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div id='container' className='space-y-4 md:space-y-0 md:w-3/4 mx-auto'>
      <div id="firstNameDiv" className='flex flex-col'>
        <label htmlFor="firstName" className='mb-2 font-extrabold'>Nombres:</label>
        <input {...register("firstName")} id="firstName" placeholder="Nombre" className='input input-bordered accent-input w-full' />
        <ErrorMessage error={errors.firstName} />


      </div>
      <div id='apellidos' className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div id='lastName'>
          <label htmlFor="lastName" className='mb-2 font-extrabold'>Apellido Paterno:</label>
          <input {...register("lastName")} id="LastName" className='input input-bordered input-info w-full' placeholder="Apellido" />
          <ErrorMessage error={errors.lastName} />
        </div>
        <div id='secondLastName'>
          <label htmlFor="secondLastName" className='mb-2 font-extrabold'>Apellido Materno (opcional):</label>
          <input {...register("secondLastName")} id="secondLastName" className='input input-bordered input-info w-full' placeholder="Segundo Apellido" />
          <ErrorMessage error={errors.secondLastName} />
        </div>
      </div>
    </div>
  );
};

export default NameFields;
