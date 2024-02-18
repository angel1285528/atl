'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../errorComponent';

const FamilyContactFields: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='w-full mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-4'>
      <div id="phoneNumberDiv" className='flex flex-col md:w-1/2'>
        <label htmlFor="familyPhoneNumber" className='font-bold mb-2'>Celular:</label>
        <input {...register('familyPhoneNumber')} id='familyPhoneNumber' placeholder="Celular" className="input input-bordered input-info w-full" />
        <ErrorMessage error={errors.familyPhoneNumber} />
      </div>
      <div className='flex flex-col md:w-1/2'>
        <label htmlFor="familyEmail" className='font-bold mb-2'>Email:</label>
        <input {...register('familyEmail')} id="familyEmail" placeholder="Email" autoComplete="email" className="input input-bordered input-info w-full" />
        <ErrorMessage error={errors.familyEmail} />
      </div> 
    </div>
  );
};  
export default FamilyContactFields;
