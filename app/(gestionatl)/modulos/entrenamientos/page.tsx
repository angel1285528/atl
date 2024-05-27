import React from 'react';
import GenericHR from '@/components/ui/GenericHorizontalLine';

import FormularioNuevoEntrenamiento from './componentes/nuevoEntrenamientoForm';
const Page = () => {
  return (
    <>
 <div className="container mx-auto py-5">
  <h1>Entrenamientos</h1>
  <GenericHR />
 </div>
 
  <FormularioNuevoEntrenamiento />
 
    </>
  );
};

export default Page;