import React from 'react';
import FormularioJornadas from './componentes/formularioJornadas';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
const Page = () => {
  return (
    <>
      <GenericHeaderModule text="Programar Jornadas en Periodo" />
      <FormularioJornadas />
    </>
  );
};

export default Page;