
import React from 'react';
import { useFormContext } from 'react-hook-form';

const NameFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="firstName">Nombres:</label> <br />
      <input {...register("firstName")} placeholder="Nombre" />
      <br />
      <label htmlFor="lastName">Apellido Paterno</label> <br />
      <input {...register("lastName")} placeholder="Apellido" />
      <br />
      <label htmlFor="secondLastName">Apellido Materno (opcional)</label> <br />
      <input {...register("secondLastName")} placeholder="Segundo Apellido" />
      <br />
    </div>
  );
};

export default NameFields;
