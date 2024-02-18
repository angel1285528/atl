import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../errorComponent';// Asegúrate de que la ruta de importación sea correcta

const FamilyNameFields: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div id='container' className='w-full mx-auto'>
      <div id="firstName" className='flex flex-col my-4'>
        <label htmlFor="familyFirstName" className='font-bold mb-2'>Nombres:</label>
        <input {...register("familyFirstName")} id="familyFirstName" placeholder="Nombre" className='input input-bordered input-info w-full' />
        <ErrorMessage error={errors.familyFirstName} />
      </div>
      <div id='apellidos' className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div id='familyLastName' className='flex flex-col'>
          <label htmlFor="familyLastName" className='font-bold mb-2'>Apellido Paterno</label>
          <input {...register("familyLastName")} id="familyLastName" className='input input-bordered input-info w-full' placeholder="Apellido" />
          <ErrorMessage error={errors.familyLastName} />
        </div>
        <div id='familySecondLastName' className='flex flex-col'>
          <label htmlFor="familySecondLastName" className='font-bold mb-2'>Apellido Materno (opcional)</label>
          <input {...register("familySecondLastName")} id="familySecondLastName" className='input input-bordered input-info w-full' placeholder="Segundo Apellido" />
          <ErrorMessage error={errors.familySecondLastName} />
        </div>
      </div>
    </div>
  );
};

export default FamilyNameFields;