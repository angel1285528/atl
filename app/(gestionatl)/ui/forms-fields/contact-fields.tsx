'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './errorComponent';

const ContactFields: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-3/4 gap-5 mx-auto'>
      <div id="phoneNumberDiv" className='flex flex-col'>
        <label htmlFor="phoneNumber" className='mb-2 font-extrabold'>Celular:</label>
        <input {...register('phoneNumber')} id='phoneNumber' placeholder="Celular" className="input input-bordered input-info w-full max-w-xs" />
        <ErrorMessage error={errors.phoneNumber} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="socioEmail" className='mb-2 font-extrabold'>Email:</label>
        <input {...register('email')} id="socioEmail" placeholder="Email" autoComplete="email" className="input input-bordered input-info w-full max-w-xs" />
        <ErrorMessage error={errors.email} />
      </div> 
    </div>
  );
  };  
  export default ContactFields;

