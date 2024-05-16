"use client"

import React, { useState } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { LoaderSizeProps } from 'react-spinners/helpers/props';

const RuletaSorteos = () => {
  const [nombres, setNombres] = useState<string[]>([]);
  const [nombreActual, setNombreActual] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const agregarNombre = () => {
    if (nombreActual.trim() !== '') {
      setLoading(true); // Mostrar animación de carga
      setTimeout(() => {
        setNombres([...nombres, nombreActual]);
        setNombreActual('');
        setLoading(false); // Ocultar animación de carga
      }, 2000); // Simulamos una pequeña espera antes de agregar el nombre
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-8">
      <h2 className="text-xl font-bold mb-4">Ruleta de Sorteos</h2>
      <div className="overflow-hidden rounded-lg border border-gray-300 mb-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <RingLoader color="#4a90e2" loading={loading} css={true}  size={60 as LoaderSizeProps['size']} />
          </div>
        ) : (
          <ul className="p-4">
            {nombres.map((nombre, index) => (
              <li key={index} className="mb-2">{nombre}</li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="text"
        value={nombreActual}
        onChange={(e) => setNombreActual(e.target.value)}
        placeholder="Ingrese un nombre"
        className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded"
      />
      <button onClick={agregarNombre} className="block w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Agregar</button>
    </div>
  );
};

// Estilos personalizados para la animación de carga
const override = css`
  display: block;
  margin: 0 auto;
`;

export default RuletaSorteos;
