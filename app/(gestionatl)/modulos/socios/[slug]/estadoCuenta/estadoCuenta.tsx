import React, { useState } from "react";

const EstadoCuenta = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Estado de Cuenta</h1>
      
      {/* Saldo Inicial */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Saldo Inicial</label>
        <input
          type="number"
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Ingrese el saldo inicial"
        />
      </div>
      
      {/* Información del socio */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Información del Socio</h2>
        <div>
          <span className="block text-sm font-medium text-gray-700">Nombre del Socio: </span>
          <span className="block text-sm font-medium text-gray-700">Total Mensualidad: </span>
          <span className="block text-sm font-medium text-gray-700">Cantidad de Jugadores Inscritos: </span>
        </div>
      </div>
      
      {/* Selección del Periodo de Pago */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Periodo de Pago</label>
        <select className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
          <option value="1">Del 1 al 10 de cada mes</option>
          <option value="2">Del 11 al 20 de cada mes</option>
          <option value="3">Del 21 al último día del mes</option>
        </select>
      </div>
      
      {/* Tabla de Estado de Cuenta */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-2">Mes</th>
              <th className="w-1/4 py-2">Importe</th>
              <th className="w-1/4 py-2">Recargos</th>
              <th className="w-1/4 py-2">Saldo</th>
              <th className="w-1/4 py-2">Fecha de Pago</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* Ejemplo de fila */}
            <tr>
              <td className="w-1/4 py-2 border px-4">Enero</td>
              <td className="w-1/4 py-2 border px-4">$1000</td>
              <td className="w-1/4 py-2 border px-4">$50</td>
              <td className="w-1/4 py-2 border px-4">$1050</td>
              <td className="w-1/4 py-2 border px-4">10/01/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Botones de Acción */}
      <div className="mt-4 flex space-x-2">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Generar Recibo
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
          Enviar Recordatorio
        </button>
      </div>
    </div>
  );
};

export default EstadoCuenta;
