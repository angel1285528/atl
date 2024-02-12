'use server'

import { PrismaClient } from '@prisma/client';
import { interfaceFamiliares } from '../interface';

const prisma = new PrismaClient();


export async function cargarFamiliares(socioId: string): Promise<interfaceFamiliares | null> {
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