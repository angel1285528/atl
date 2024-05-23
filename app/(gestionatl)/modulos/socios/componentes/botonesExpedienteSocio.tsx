import Link from 'next/link';
import React from 'react';

interface BotonesExpedienteSocioProps {
  idSlug: string;
}

const BotonesExpedienteSocio: React.FC<BotonesExpedienteSocioProps> = ({ idSlug }) => {
  return (
    <div className='hidden md:block lg:basis-1/5'>
      <div className='flex flex-col space-y-2 mt-4'>
        <Link href={`/modulos/socios/${idSlug}/estadoCuenta`} passHref>
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

export default BotonesExpedienteSocio;
