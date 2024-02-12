'use client'

// Importa los módulos y tipos necesarios
import React, { useState, useEffect } from 'react';
import { cargarCliente } from '@/app/lib/crud/cargarcliente';
import Image from 'next/image';
import  CurrentPageQRCode  from '@/app/(gestionatl)/ui/qrUrl';
interface SocioData {
  id: string;
  firstName: string;
  lastName: string;
  secondLastName?: string | null | undefined;
  email: string;
  phoneNumber: string;
  work?: string | null | undefined;
  scholarity?: string | null | undefined;
  urlSocioPhoto?: string | null | undefined;
  urlSocioIne?: string | null | undefined;
  rol: string;
  status: string; // Asegúrate de importar o definir correctamente el tipo Role
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
        // Obtén los datos del socio mediante la función cargarCliente
        const data = await cargarCliente(id);
        setSocio(data);
      } catch (err) {
        console.error("Error al obtener los datos del socio:", err);
        setError('Error al cargar los datos del socio');
      }
    };

    obtenerDatosSocio();
  }, [id]);

  const renderizarContenido = () => {
    if (error) {
      return <div>Hubo un error: {error}</div>;
    }

    if (!socio) {
      return <div>Cargando...</div>;
    }

    return (
      <div id="datosSocio" className='flex flex-row mt-5'>
        <div id='fotoSocio' className='basis-1/5'>
          <Image
            src={socio.urlSocioPhoto || '/images/avatar.png'}
            alt={`Foto de ${socio.firstName} ${socio.lastName}`}
            width={200}
            height={200}
            className='border-4 border-blue-800 rounded-full hover:border-sky-900'
          />
        </div>
        <div className='basis-3/5 pl-6'>
          <h2>
            <span className='text-3xl font-bold text-blue-900'>Nombre:</span>
            <span className='text-3xl '>{socio.firstName} {socio.lastName} {socio.secondLastName} </span>
          </h2>
          <h3>
            <span className='text-2xl font-bold text-blue-900'>Id:</span>
            <span className='text-2xl'>{socio.id}</span>
            <span className='text-2xl font-bold text-blue-900 ml-16'>Status:</span>
            <span className='text-2xl'>{socio.status}</span>
          </h3>
          <h3>
              <span className='text-xl font-bold text-blue-900'>Correo:</span>
              <span className='text-xl'>{socio.email}</span>
              <span className='text-2xl font-bold text-blue-900 ml-6'>Celular:</span>
            <span className='text-2xl'>{socio.phoneNumber}</span>
          </h3>
          <h3>
              <span className='text-xl font-bold text-blue-900'>Ocupacion:</span>
              <span className='text-xl'>{socio.work}</span>
              <span className='text-2xl font-bold text-blue-900 ml-6'>Escolaridad:</span>
            <span className='text-2xl'>{socio.scholarity}</span>
          </h3>
          <h3>
            <span className='text-xl font-bold text-blue-900'>Fecha de Registro:</span>
            <span className='text-xl'>{socio.fechaRegistro.toLocaleDateString()}</span>
          </h3>
         
        </div>
        <div className='basis-1/5'>
          <h1>Acciones</h1>
          <CurrentPageQRCode />
        </div>
      </div>
    );
  };

  return renderizarContenido();
};

export default ExpedienteSocio;
