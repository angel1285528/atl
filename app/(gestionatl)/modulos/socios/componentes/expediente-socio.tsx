'use client'
import React, { useEffect, useState } from 'react';
import { cargarCliente } from '@/app/lib/crud/cargarcliente';
import Image from 'next/image';

import { Role, StatusSocios, } from "@prisma/client";
import BotonesExpedienteSocio from './botonesExpedienteSocio';
import Link from 'next/link';

interface SocioData {
  id: string;
  firstName: string;
  lastName: string;
  secondLastName?: string | null;
  street: string;
  streetNumber: string;
  colonia: string;
  postalCode: string;
  city: string;
  state: string;
  phoneNumber: string;
  email: string;
  urlSocioPhoto?: string | null;
  urlSocioIne?: string | null;
  urlIdDomicilio?: string | null;
  rol: Role;
  status: StatusSocios;
  fechaRegistro: Date;
  periodoDePago: string;
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
       <div id='fotoSocio' className='relative w-[200px] h-[200px] rounded-full overflow-hidden' style={{ background: 'linear-gradient(to right, #1E3A8A 50%, #FBBF24 50%)' }}>
        <Image
          src={socio.urlSocioPhoto || '/images/avatar.png'}
          alt={`Foto de ${socio.firstName}`}
          layout='fill'
          objectFit='cover'
          className='absolute inset-0 rounded-full'
        />
      </div>
      <div className='lg:basis-3/5'>
        <h2 className='text-3xl font-bold text-amber-400'>{socio.firstName} {socio.lastName} {socio.secondLastName}</h2>
        <div className="flex flex-wrap justify-between">
          <h3 className='text-2xl font-bold text-black'>Curp: <span className='font-normal text-blue-800'>{socio.id}</span></h3>
          <h3 className='text-2xl font-bold text-blue-900'>Status: <span className='font-normal'>{socio.status}</span></h3>
        </div>
        <div className="flex flex-wrap justify-between">
        <h3 className='text-xl font-bold text-blue-900'>Dirección: <span className='font-normal'>{socio.street}{socio.streetNumber} Colonia: {socio.colonia}, {socio.city}, {socio.state}</span></h3>
          <h3 className='text-xl font-bold text-blue-900'>Correo: <span className='font-normal'>{socio.email}</span></h3>
          <h3 className='text-2xl font-bold text-blue-900'>Celular: <span className='font-normal'>{socio.phoneNumber}</span></h3>
        </div>

        <h3 className='text-xl font-bold text-blue-900'>Fecha de Registro: <span className='font-normal'>{socio.fechaRegistro.toLocaleDateString()}</span></h3>
         <Link href={`${socio.urlSocioIne}`}><h3 className='text-xl font-bold text-blue-900'>Identificación: <span className='font-normal'>Credencial de Elector</span></h3></Link>
      </div>
      <div className='hidden md:block lg:basis-1/5'>
        <h1 className='text-xl text-center font-bold text-blue-900'>Acciones</h1>
        {/* <BotonesExpedienteSocio />         */}
      </div>
    </div>
  );
};

export default ExpedienteSocio;
