'use server';
import { jugador } from '@prisma/client';
import prisma from '@/app/lib/prisma';



export async function cargarJugador(playerId: string): Promise<jugador | null> {
  if (!playerId) {
    throw new Error("El playerId no debe ser undefined o null");
  }
  
  try {
    const jugador = await prisma.jugador.findUnique({
      where: {
        playerId: playerId,
      },
    });
    console.log("Jugador cargado:", jugador);
    return jugador;
  } catch (error) {
    console.error("Error al cargar el jugador:", error);
    throw error;
  }
}
