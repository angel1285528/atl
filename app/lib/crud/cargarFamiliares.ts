'use server'
import { familiares } from '@prisma/client';
import { unstable_noStore as noStore } from 'next/cache';
import prisma from "@/app/lib/prisma";


export async function cargarFamiliares(socioId: string): Promise<familiares[]> {
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