'use client'
import { ColumnDef } from '@tanstack/react-table';
import { conceptosMovimientos } from '@prisma/client';

export const columnasConceptos: ColumnDef<conceptosMovimientos>[] = [

  {
    accessorKey: 'concepto',
    header: 'Concepto',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'tipoConcepto',
    header: 'Tipo de Concepto',
    cell: info => info.getValue(),
  },
  {
    id: 'actions',
    header: 'Acciones',
    cell: ({ row }) => (
      <button
        onClick={() => handleDelete(row.original.idConceptoMovimiento)}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Eliminar
      </button>
    ),
  },
];

// Function to handle deletion of a concepto
const handleDelete = async (id: string) => {
  if (confirm('¿Estás seguro de que deseas eliminar este concepto?')) {
    try {
      await deleteConcepto(id);
      // Update the table data here if necessary
      alert('Concepto eliminado con éxito');
    } catch (error) {
      console.error('Error eliminando el concepto:', error);
      alert('Error eliminando el concepto');
    }
  }
};

// Function to delete a concepto
const deleteConcepto = async (id: string) => {
  try {
    await fetch(`/api/conceptos/${id}`, { method: 'DELETE' });
  } catch (error) {
    console.error('Error eliminando el concepto:', error);
    throw error;
  }
};
