'use client'
import React from 'react';
import { Temporadas } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import EstadoSwitch from './EstadoSwitch'; // Importa el nuevo componente

export const columnasTemporadas: ColumnDef<Temporadas>[] = [
  {
    accessorKey: 'Temporada',
    header: 'Temporada',
    cell: ({ row }) => {
      const MainValue: string = row.getValue('Temporada')
      return (
        <div className='flex flex-col text-black text-sm md:text-2xl'>
          <div className='md:font-medium hover:text-blue-900 hover:underline'>{MainValue}</div>
        </div>
      )
    },
  },
  {
    accessorKey: 'fechaInicioTemporada',
    header: 'Fecha Inicio',
    cell: ({ row }) => {
      const fechaInicio: Date = row.getValue('fechaInicioTemporada')
      return <div>{new Date(fechaInicio).toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: 'fechaFinTemporada',
    header: 'Fecha Final',
    cell: ({ row }) => {
      const fechaFin: Date = row.getValue('fechaFinTemporada')
      return <div>{new Date(fechaFin).toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: 'Estado',
    header: 'Estado',
    cell: ({ row }) => {
      const estado: boolean = row.getValue('Estado');
      const idPeriodo: number = row.original.idPeriodo;

      return <EstadoSwitch idPeriodo={idPeriodo} initialEstado={estado} />;
    },
  },
];
