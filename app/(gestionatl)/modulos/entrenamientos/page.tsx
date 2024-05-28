'use client';

import React from 'react';
import GenericHR from '@/components/ui/GenericHorizontalLine';
import IniciarEntrenamientoButton from '@/components/ui/nuevoEntrenamientoBtn';

const Page = () => {
  return (
    <>
      <div className="container mx-auto py-5">
        <h1>Entrenamientos</h1>
        <GenericHR />
        <IniciarEntrenamientoButton />
      </div>
    </>
  );
};

export default Page;
