import React from 'react'
import GenericHR from '@/components/ui/GenericHorizontalLine'
interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { slug } = params;

  // Verificación adicional para asegurarse de que slug no es undefined
  if (!slug) {
    return <div>Temporada no existe</div>;
  }

  return (
    <div>
      <GenericHR />
      <h1>Temporada: {slug}</h1>
      <GenericHR />
    </div>
  );
}
