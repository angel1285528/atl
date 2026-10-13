'use client'
import React, { useEffect, useState } from 'react';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
import NuevoConceptoForm from '../componentes/nuevoConceptoForm';
import GenericDataTable from '@/components/ui/genericDataTable';
import { columnasConceptos } from '../componentes/columnasConceptos';
import { conceptosMovimientos } from '@prisma/client';
import { getAllConceptos, deleteConcepto } from '../lib/crudFinanzas';

const Page: React.FC = () => {
  const [conceptos, setConceptos] = useState<conceptosMovimientos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConceptos = async () => {
      try {
        const data = await getAllConceptos();
        setConceptos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error obteniendo los conceptos:', error);
        setLoading(false);
      }
    };

    fetchConceptos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GenericHeaderModule text='Nuevo Concepto' />
      <NuevoConceptoForm />
      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Conceptos Guardados</h2>
        <GenericDataTable data={conceptos} columns={columnasConceptos} />
      </div>
    </>
  );
};

export default Page;
