'use client'
import React, { useEffect, useState } from 'react';
import { getAllConceptos, deleteConcepto } from '../lib/crudFinanzas';
import { conceptosMovimientos } from '@prisma/client';

const ConceptosTable: React.FC = () => {
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

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este concepto?')) {
      try {
        await deleteConcepto(id);
        setConceptos(conceptos.filter(concepto => concepto.idConceptoMovimiento !== id));
        alert('Concepto eliminado con éxito');
      } catch (error) {
        console.error('Error eliminando el concepto:', error);
        alert('Error eliminando el concepto');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4">Conceptos Guardados</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Concepto</th>
              <th className="py-2 px-4 border-b">Tipo de Concepto</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {conceptos.map((concepto) => (
              <tr key={concepto.idConceptoMovimiento}>
                <td className="py-2 px-4 border-b whitespace-nowrap">{concepto.idConceptoMovimiento}</td>
                <td className="py-2 px-4 border-b whitespace-nowrap">{concepto.concepto}</td>
                <td className="py-2 px-4 border-b whitespace-nowrap">{concepto.tipoConcepto}</td>
                <td className="py-2 px-4 border-b whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(concepto.idConceptoMovimiento)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConceptosTable;
