'use client'
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';

import { getAllSocios } from '@/app/(gestionatl)/modulos/Finanzas/lib/crudFinanzas';
import { socio, } from '@prisma/client';

interface MovimientoFormValues {
  socioId: string;
  jugadorIds: string[];
  conceptoId: string;
  importe: number;
}

const ListaSocio: React.FC = () => {
  const methods = useForm<MovimientoFormValues>();
  const { register, handleSubmit, reset, control } = methods;
  const socioId = useWatch({ control, name: 'socioId' });

  const [socios, setSocios] = useState<socio[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const [sociosData] = await Promise.all([
        getAllSocios(),
      ]);
      setSocios(sociosData);
    };
    fetchData();
  }, []);




  return (
<>
        <div className='w-full md:w-1/4'>
          <label htmlFor="socioId" className="block text-sm font-medium text-gray-700">
            Socio
          </label>
          <select
            {...register('socioId', { required: true })}
            id="socioId"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Selecciona un socio</option>
            {socios.map((socio) => (
              <option key={socio.id} value={socio.id}>
                {socio.firstName} {socio.lastName}
              </option>
            ))}
          </select>
        </div>
     
        <div>
          <label htmlFor="importe" className="block text-sm font-medium text-gray-700">
            Importe
          </label>
          <input
            {...register('importe', { required: true })}
            type="number"
            id="importe"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
    
         
        </div>

            </>
  );
};

export default ListaSocio;
