'use client';
import LinkButton from '@/components/ui/linkButton';
import React from 'react';
import GenericHR from '@/components/ui/GenericHorizontalLine';
import IniciarEntrenamientoButton from '@/components/ui/nuevoEntrenamientoBtn';
const nuevaJornada = "entrenamientos/nuevaJornada/"
const Page = () => {
  return (
    <>
      <div className="container mx-auto py-5">
        <h1>Entrenamientos</h1>
        <GenericHR />
        <IniciarEntrenamientoButton />
        <LinkButton url={nuevaJornada} text='Programar Jornadas de Entrenamientos' />

      </div>
    </>
  );
};

export default Page;
