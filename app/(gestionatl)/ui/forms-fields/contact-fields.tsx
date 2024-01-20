/*'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';

const ContactComponent = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <label htmlFor="phone_number">Celular: </label> <br />
      <input {...register('phone_number')} placeholder="Celular" className="input input-bordered input-info w-full max-w-xs" />
      {errors.phone_number && <p>{errors.phone_number.message}</p>}
      <br />

      <label htmlFor="email">Email: </label> <br />
      <input {...register('email')} placeholder="Email" id='email' name='email' className="input input-bordered input-info w-full max-w-xs" />
      {errors.email && <p>{errors.email.message}</p>}
      <br />


    </div>
    );
  };  
  export default ContactComponent;
*/
