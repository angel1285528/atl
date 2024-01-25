'use client'

// Importa los módulos y tipos necesarios
import React, { useState, useEffect } from 'react';
import { cargarCliente } from '@/app/lib/crud/cargarcliente';

interface SocioData {
  id: string;
  firstName: string;
  lastName: string;
  secondLastName: string | null;
  email: string;
  phoneNumber: string;
  work: string | null;
  scholarity: string | null;
  urlSocioPhoto: string | null;
  urlSocioIne: string | null;
  rol: Role; // Asegúrate de importar o definir correctamente el tipo Role
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
      <div>
        {/* Aquí iría la renderización de los datos del socio */}
        <h1>Datos del Socio</h1>
        <h3>ID: {socio.id}</h3>
        <p>Nombre: {socio.firstName} {socio.lastName}</p>
        {/* Continúa con el resto de los datos del socio */}
      </div>
    );
  };

  return renderizarContenido();
};

export default ExpedienteSocio;
