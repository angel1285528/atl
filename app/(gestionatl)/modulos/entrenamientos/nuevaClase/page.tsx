import React from 'react';
import TablaProgramacionClases from '../componentes/programacionClases';

const Page = () => {
  return (
    <>
      <h1>Nueva Clase</h1>
      <div>
        <h2>Periodo</h2>
        <TablaProgramacionClases />
      </div>
    </>
  );
};

export default Page;
