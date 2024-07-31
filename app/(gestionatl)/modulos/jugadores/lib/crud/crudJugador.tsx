'use server'
// lib/crud/crudJugador.tsx

import prisma from '@/app/lib/prisma';
import { jugador, Status_Jugador, Cuota } from '@prisma/client'; // Importar el enum


interface PlayerData extends jugador {
  tipoMensualidad: string;
  importeMensualidad: string;
}

export const createPlayer = async (playerData: PlayerData) => {
  try {
    // Extraer los campos específicos de estado de cuenta del jugador y el resto de los datos del jugador
    const { tipoMensualidad, importeMensualidad, ...rest } = playerData;

    // Convertir tipoMensualidad a enum Cuota
    const tipoMensualidadEnum = Cuota[tipoMensualidad as keyof typeof Cuota];

    const player = await prisma.jugador.create({
      data: {
        
        ...rest, // El resto de los datos del jugador
        estadoCuentaJugador: {
          create: {
            tipoMensualidad: tipoMensualidadEnum,
            importeMensualidad: parseFloat(importeMensualidad), // Asegurar que importeMensualidad se almacene como float

          },
          
        },

      },
    });
    return player; // Retornar el jugador creado
  } catch (error) {
    throw new Error(`Error creating player: ${error}`); // Lanza un error si algo falla
  }
};

// Función para actualizar el estado de un jugador
export const actualizarEstadoJugador = async (playerId: string, nuevoEstado: Status_Jugador) => {
  try {
    const jugadorActualizado = await prisma.jugador.update({
      where: {
        playerId,
      },
      data: {
        status: nuevoEstado,
      },
    });
    
    return jugadorActualizado;
  } catch (error) {
    throw new Error(`Error al actualizar el estado del jugador: ${(error as Error).message}`);
  }
};

export async function cargarJugadoresPorSocio(socioId: string): Promise<jugador[]> {
  
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