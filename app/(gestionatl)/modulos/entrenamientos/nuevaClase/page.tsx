
import React from 'react';
import TablaProgramacionClases from '../componentes/programacionClases';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <>
      <GenericHeaderModule text='Agregar Clases' />
      <div>
        <TablaProgramacionClases />
      </div>
    </>
  );
};

export default Page;
