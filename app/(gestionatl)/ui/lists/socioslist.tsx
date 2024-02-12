{/*'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { fetchSocios } from '@/app/lib/crud/sociolist';
import { interfaceSocio } from '@/app/lib/interface';
import Image from 'next/image';
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
  <h1 className='text-4xl text-blue-900 text-center mt-5'>Lista de Socios </h1>
  <main>
    {listaSocios.map((socio) => (
      <div key={socio.id} className='text-black mb-4 p-2 border border-gray-200 rounded'>
        <div className='flex items-center space-x-4'>
          <div>
            {socio.urlSocioPhoto && (
              <Image 
                src={socio.urlSocioPhoto}
                width={100}
                height={100} 
                alt="Foto del socio"
              />
            )}
          </div>
          <div>
            <h2>Id: {socio.id}</h2>
            <h3>{socio.firstName} {socio.lastName} {socio.secondLastName}</h3>
            <p>Teléfono: {socio.phoneNumber}</p>
            
          </div>
        </div>
        <div className='flex mt-2'>
        <Link href={`./socios/${socio.id}`}>
          <button className='btn btn-primary mr-2'>Expediente</button>
              </Link>
        </div>
      </div>
    ))}
  </main>
</>
);
} */}