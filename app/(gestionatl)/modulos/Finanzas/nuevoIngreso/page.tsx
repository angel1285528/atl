'use client'
import React from 'react';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
import NuevoConceptoForm from '../componentes/nuevoConceptoForm';
import ConceptosTable from '../componentes/conceptosTable';
import MovimientoForm from '../componentes/movimiento';

const Page: React.FC = () => {
  return (
    <>
      <GenericHeaderModule text='Nuevo Concepto' />
      <NuevoConceptoForm />
      <MovimientoForm />
      <ConceptosTable />
    </>
  );
};

export default Page;
