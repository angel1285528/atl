'use server'

import prisma from '../prisma';
import { interfaceFamiliares } from '../interfaces/interfaceSocio';
import { unstable_noStore as noStore } from 'next/cache';



export async function cargarFamiliares(socioId: string): Promise<interfaceFamiliares[]> {
  noStore();
  try {
    console.log("Cargando familiares con ID:", socioId);
    const familiares = await prisma.familiares.findMany({
      where: {
        socioId: socioId,
      },
    });
    console.log("Familiares cargados:", familiares);
    return familiares;
  } catch (error) {
    console.error("Error al cargar los familiares:", error);
    throw error;
  }
}