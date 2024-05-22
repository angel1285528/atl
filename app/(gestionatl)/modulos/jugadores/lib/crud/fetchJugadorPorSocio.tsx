'use server'
import { interfacePlayer } from '../interfacePlayer';
import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/app/lib/prisma';

export async function cargarJugadoresPorSocio(socioId: string): Promise<interfacePlayer[]> {
  noStore();
  try {
    console.log("Cargando familiares con ID:", socioId);
    const jugadores = await prisma.jugador.findMany({
      where: {
        socioId: socioId,
      },
    });
    console.log("Familiares cargados:", jugadores);
    return jugadores;
  } catch (error) {
    console.error("Error al cargar los familiares:", error);
    throw error;
  }
}