
import React from 'react';
import { FieldError, useFormContext, FieldErrorsImpl, Merge } from 'react-hook-form';

const NameFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div>
      <input {...register("firstName")} placeholder="Nombre" />
      

      <input {...register("lastName")} placeholder="Apellido" />
      

      <input {...register("secondLastName")} placeholder="Segundo Apellido" />
      
    </div>
  );
};

export default NameFields;
