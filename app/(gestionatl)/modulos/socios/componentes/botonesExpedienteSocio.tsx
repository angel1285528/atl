
import Link from 'next/link';
import React from 'react';

import { FaUser, FaPlus, FaHome } from 'react-icons/fa'; // Ejemplo de iconos usando react-icons
import { IconType } from 'react-icons/lib';



export default function BotonesExpedienteSocio() {
  return (
    <div className='hidden md:block lg:basis-1/5'>
      <div className='flex flex-col space-y-2 mt-4'>
<Link href="/" >
        <button
          key="socio"
          className='flex items-center text-center w-full px-4 py-2 text-white bg-green-600 rounded-md'>
Estado de Cuenta
        </button>
            </Link>

      </div>
    </div>
  );
}
