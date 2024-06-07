import React from 'react';
import GenericHR from '@/components/ui/GenericHorizontalLine';
import FormularioJornadas from './componentes/formularioJornadas';
const Page = () => {
  return (
    <>
      <h1>Nueva Jornada de Entrenamiento</h1>
      <GenericHR />
      <FormularioJornadas />
    </>
  );
};

export default Page;