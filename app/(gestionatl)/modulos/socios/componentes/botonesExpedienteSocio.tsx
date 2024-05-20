"use client"

import React from 'react';
import Link from 'next/link';
import { FaUser, FaPlus, FaHome } from 'react-icons/fa'; // Ejemplo de iconos usando react-icons
import { IconType } from 'react-icons/lib';

interface Boton {
  texto: string;
  link: string;
  Icon: IconType;
  action: string;
}

const botones: Boton[] = [
  { texto: 'Estado de Cuenta', link: '', Icon: FaHome, action: 'estadoCuenta' },
  { texto: 'Agregar Jugador', link: '', Icon: FaPlus, action: 'agregarJugador' },
  { texto: 'Agregar Familiar', link: '', Icon: FaUser, action: 'agregarFamiliar' },
];

interface BotonesExpedienteSocioProps {
  onButtonClick: (action: string) => void;
}

export default function BotonesExpedienteSocio({ onButtonClick }: BotonesExpedienteSocioProps) {
  return (
    <div className='hidden md:block lg:basis-1/5'>
      <div className='flex flex-col space-y-2 mt-4'>
        {botones.map((boton, index) => (
          <button
            key={index}
            onClick={() => onButtonClick(boton.action)}
            className='flex items-center w-full px-4 py-2 text-white bg-green-600 rounded-md'
          >
            <boton.Icon className='mr-2' />
            {boton.texto}
          </button>
        ))}
      </div>
    </div>
  );
}
