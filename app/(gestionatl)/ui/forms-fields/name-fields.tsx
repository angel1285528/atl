
import React from 'react';
import { useFormContext } from 'react-hook-form';

const NameFields: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <input {...register("firstName")} placeholder="Nombre" />
      {errors.firstName && <p>{errors.firstName?.message}</p>} <br />

      <input {...register("lastName")} placeholder="Apellido" />
      {errors.lastName && <p>{errors.lastName?.message}</p>} <br />

      <input {...register("secondLastName")} placeholder="Segundo Apellido" />
      {errors.secondLastName && <p>{errors.secondLastName?.message}</p>} <br />
    </div>
  );
};

export default NameFields;
