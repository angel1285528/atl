'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';

const ContactFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="phoneNumber">Celular: </label> <br />
      <input {...register('phoneNumber')} placeholder="Celular" className="input input-bordered input-info w-full max-w-xs" />
      <br />

      <label htmlFor="email">Email: </label> <br />
      <input {...register('email')} placeholder="Email" id='email' name='email' className="input input-bordered input-info w-full max-w-xs" />
      
      <br />


    </div>
    );
  };  
  export default ContactFields;

