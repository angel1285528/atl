'use client'

import React, { useEffect, useState } from 'react';
import { fetchSocios } from '@/app/lib/crud/sociolist';
import { interfaceSocio } from '@/app/lib/interface';
// Asegúrate de que la ruta sea correcta

export default function ListaSocios() {
  const [listaSocios, setListaSocios] = useState<interfaceSocio[]>([]);

  useEffect(() => {
    const cargarSocios = async () => {
        const socios = await fetchSocios();
        setListaSocios(socios);
    };
    cargarSocios();
}, []);

return (
    <>
    <h1>Lista de Socios</h1>
    <main>
        {listaSocios.map((socio) => (
            <div key={socio.id}>
              <h3>{socio.firstName} {socio.lastName}</h3>
              <h4>{socio.email} {socio.phoneNumber}</h4>
              {/* Agrega aquí otros detalles que quieras mostrar */}
            </div>
        ))}
    </main>
    </>
);
}