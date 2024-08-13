import React from 'react';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
import ListaSocio from './componentes/listaSocio';
const Page = () => {
  return (
    <>
      <GenericHeaderModule text='Pago Mensualidad' />
<ListaSocio />
    </>
  );
};

export default Page;