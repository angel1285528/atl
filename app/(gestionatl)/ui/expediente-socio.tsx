'use client'
import React, { useEffect, useState } from 'react';
import { cargarCliente } from '@/app/lib/crud/cargarcliente';
import Image from 'next/image';
import CurrentPageQRCode from '@/app/(gestionatl)/ui/qrUrl';

interface SocioData {
  id: string;
  firstName: string;
  lastName: string;
  secondLastName?: string | null;
  email: string;
  phoneNumber: string;
  work?: string | null;
  scholarity?: string | null;
  urlSocioPhoto?: string | null;
  rol: string;
  status: string;
  fechaRegistro: Date;
}

interface ExpedienteSocioProps {
  id: string;
}

const ExpedienteSocio: React.FC<ExpedienteSocioProps> = ({ id }) => {
  const [socio, setSocio] = useState<SocioData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerDatosSocio = async () => {
      try {
        const data = await cargarCliente(id);
        setSocio(data);
      } catch (err) {
        console.error("Error al obtener los datos del socio:", err);
        setError('Error al cargar los datos del socio');
      }
    };

    obtenerDatosSocio();
  }, [id]);

  if (error) return <div>Hubo un error: {error}</div>;
  if (!socio) return <div>Cargando...</div>;

  return (
    <div id="datosSocio" className='flex flex-col lg:flex-row gap-5 mt-5'>
      <div id='fotoSocio' className='lg:basis-1/5 flex justify-center'>
        <Image
          src={socio.urlSocioPhoto || '/images/avatar.png'}
          alt={`Foto de ${socio.firstName} ${socio.lastName}`}
          width={200}
          height={200}
          className='border-4 border-blue-800 rounded-full'
        />
      </div>
      <div className='lg:basis-3/5'>
        <h2 className='text-3xl font-bold text-blue-900'>Nombre: <span className='font-normal'>{socio.firstName} {socio.lastName} {socio.secondLastName}</span></h2>
        <div className="flex flex-wrap justify-between">
          <h3 className='text-2xl font-bold text-blue-900'>Id: <span className='font-normal'>{socio.id}</span></h3>
          <h3 className='text-2xl font-bold text-blue-900'>Status: <span className='font-normal'>{socio.status}</span></h3>
        </div>
        <div className="flex flex-wrap justify-between">
          <h3 className='text-xl font-bold text-blue-900'>Correo: <span className='font-normal'>{socio.email}</span></h3>
          <h3 className='text-2xl font-bold text-blue-900'>Celular: <span className='font-normal'>{socio.phoneNumber}</span></h3>
        </div>

        <h3 className='text-xl font-bold text-blue-900'>Fecha de Registro: <span className='font-normal'>{socio.fechaRegistro.toLocaleDateString()}</span></h3>
      </div>
      <div className='hidden md:block lg:basis-1/5'>
        <h1 className='text-xl font-bold text-blue-900'>Acciones</h1>
        <CurrentPageQRCode  />
      </div>
    </div>
  );
};

export default ExpedienteSocio;
