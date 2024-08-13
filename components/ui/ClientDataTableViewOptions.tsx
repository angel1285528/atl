// app/(gestionatl)/modulos/entrenamientos/components/ClientDataTableViewOptions.tsx
'use client';

import React from 'react';
import { DataTableViewOptions } from '@/components/ui/dataTableViewOptions';
import { useReactTable, getCoreRowModel, ColumnDef } from '@tanstack/react-table';

interface ClientDataTableViewOptionsProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export default function ClientDataTableViewOptions<TData>({
  data,
  columns,
}: ClientDataTableViewOptionsProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DataTableViewOptions table={table} />;
}