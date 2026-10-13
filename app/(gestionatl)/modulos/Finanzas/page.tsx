import React from 'react';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
import GenericLinkButton from '../components/dashboard/GenericLinkButton';
import { ListIcon } from 'lucide-react';
import { FaMoneyCheck } from 'react-icons/fa';

const Page = () => {
  
    const Acciones = [
        { text: 'Conceptos de Pago', url: '/modulos/Finanzas/nuevoConcepto', icon: <ListIcon /> },
        { text: 'Registrar Pago', url: '/modulos/Finanzas/nuevoIngreso', icon: <FaMoneyCheck /> }
        
      ];
  
    return (
    <>
      <GenericHeaderModule text='Finanzas' />
{Acciones.map((accion, index) => (
    <GenericLinkButton key={index} text={accion.text} url={accion.url} icon={accion.icon} />
))}
    </>
  );
};

export default Page;