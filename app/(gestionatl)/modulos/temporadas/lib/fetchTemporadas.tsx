'use server'
import prisma from '@/app/lib/prisma';

export const fetchTemporadas = async () => {  // Aclarar los datos que hacen Fetch
  const Temporadas = await prisma.temporadas.findMany();
  return Temporadas;
};
