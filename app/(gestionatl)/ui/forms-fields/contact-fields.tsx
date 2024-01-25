'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';

const ContactFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div className='grid grid-cols-2 w-3/4 gap-5 mx-auto'>
      <div id="phoneNumberDiv" className=''>
      <label htmlFor="socioPhoneNumber" className='ml-6'>Celular: </label> <br />
      <input {...register('phoneNumber')} id='socioPhoneNumber' placeholder="Celular" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <label htmlFor="socioEmail" className='ml-6'>Email: </label> <br />
      <input {...register('email')} id="socioEmail" placeholder="Email" autoComplete="email" className="input input-bordered input-info w-full max-w-xs" />
       </div> 
    </div>
    );
  };  
  export default ContactFields;

