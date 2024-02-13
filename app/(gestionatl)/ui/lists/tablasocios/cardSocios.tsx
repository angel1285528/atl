import React from 'react';
import { flexRender } from '@tanstack/react-table';


const CardSocios = ({ row }) => (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      {row.getVisibleCells().map((cell) => (
        <div key={cell.id}>
          <h3 className="font-bold">{cell.column.columnDef.header}</h3>
          <p>{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
        </div>
      ))}
    </div>
  );
  

  export default CardSocios;