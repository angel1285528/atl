// components/ui/dataTableViewOptions.tsx
import React from 'react';
import { Table } from '@tanstack/react-table';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  // Your component logic here
  return (
    // Render your table options here
    <div>
      {/* Example: Toggle column visibility */}
      {table.getAllColumns().map(column => (
        <div key={column.id}>
          <label>
            <input
              type="checkbox"
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
            />
            {column.id}
          </label>
        </div>
      ))}
    </div>
  );
}