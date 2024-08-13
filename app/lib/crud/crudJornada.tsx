'use server';

import prisma from "@/app/lib/prisma";
import { JornadaEntrenamiento } from "@prisma/client";

// Crear muchas jornadas de entrenamiento

export async function CreateManyJornadas(jornadas: Omit<JornadaEntrenamiento, 'idJornadaEntrenamiento'>[]) {

  try {
    const result = await prisma.jornadaEntrenamiento.createMany({
      data: jornadas,
    });
    console.log(`Successfully created ${result.count} jornadas de entrenamiento`);

    return result;
  } catch (error) {
    console.error("Error creating jornadas de entrenamiento:", error);
    throw error;
  }
}

// Crear una jornada de entrenamiento
export async function createJornada(jornada: Omit<JornadaEntrenamiento, 'idJornadaEntrenamiento'>) {
  try {
    const result = await prisma.jornadaEntrenamiento.create({
      data: jornada,
    });
    console.log(`Successfully created jornada de entrenamiento`);
    return result;
  } catch (error) {
    console.error("Error creating jornada de entrenamiento:", error);
    throw error;
  }
}

// Obtener una jornada de entrenamiento por ID
export async function findUniqueJornada(id: number) {
  try {
    const jornada = await prisma.jornadaEntrenamiento.findUnique({
      where: {
        idJornadaEntrenamiento: id,
      },
    });
    return jornada;
  } catch (error) {
    console.error("Error finding jornada de entrenamiento:", error);
    throw error;
  }
}

// Eliminar una jornada de entrenamiento por ID
export async function deleteJornada(id: number) {
  try {
    // Iniciar una transacción
    const result = await prisma.$transaction(async (prisma) => {
      // Eliminar las entradas relacionadas en JornadaClase
      await prisma.jornadaClase.deleteMany({
        where: {
          jornadaId: id,
        },
      });

      // Eliminar la entrada en JornadaEntrenamiento
      const deletedJornada = await prisma.jornadaEntrenamiento.delete({
        where: {
          idJornadaEntrenamiento: id,
        },
      });

      return deletedJornada;
    });

    console.log(`Successfully deleted jornada de entrenamiento with ID ${id}`);
    return result;
  } catch (error) {
    console.error("Error deleting jornada de entrenamiento:", error);
    throw error;
  }
}

//Cancelar jornada de entrenamiento
export async function cancelarJornada(idJornadaEntrenamiento: number){
  try {
    await prisma.jornadaEntrenamiento.update({
      where: {
        idJornadaEntrenamiento: idJornadaEntrenamiento,
      },
      data:{
        estado: "Cancelada"
      },
    });
    console.log(`Successfully finalized jornada de entrenamiento with ID ${idJornadaEntrenamiento}`);
    return true;
  } catch (error) {
    console.error("Error finalizando la jornada de entrenamiento:", error);
    throw error;
  }
}
// Actualizar una jornada de entrenamiento por ID
export async function updateJornada(id: number, data: Partial<JornadaEntrenamiento>) {
  try {
    const result = await prisma.jornadaEntrenamiento.update({
      where: {
        idJornadaEntrenamiento: id,
      },
      data: data,
    });
    console.log(`Successfully updated jornada de entrenamiento with ID ${id}`);
    return result;
  } catch (error) {
    console.error("Error updating jornada de entrenamiento:", error);
    throw error;
  }
}

// Obtener todas las jornadas de entrenamiento
export async function fetchJornadasEntrenamiento(): Promise<JornadaEntrenamiento[]> {
  try {
    const jornadas = await prisma.jornadaEntrenamiento.findMany({
      include: {
        clases: {
          include: {
            clase: true,
          },
        },
      },
    });
    return jornadas;
  } catch (error) {
    console.error("Error al cargar las jornadas de entrenamiento:", error);
    throw error;
  }
}


export async function finalizarJornada(idJornadaEntrenamiento: number) {
  try {
    // Cambiar el estado de la jornada a "Finalizada"
    await prisma.jornadaEntrenamiento.update({
      where: {
        idJornadaEntrenamiento: idJornadaEntrenamiento,
      },
      data: {
        estado: "Realizada",
      },
    });

    console.log(`Successfully finalized jornada de entrenamiento with ID ${idJornadaEntrenamiento}`);
    return true;
  } catch (error) {
    console.error("Error finalizando la jornada de entrenamiento:", error);
    throw error;
  }
}
export async function iniciarJornada(idJornadaEntrenamiento: number) {
  try {
    // Obtener las clases asociadas con la jornada
    const jornadaClases = await prisma.jornadaClase.findMany({
      where: {
        jornadaId: idJornadaEntrenamiento,
      },
      include: {
        clase: true,
      },
    });

    // Registrar asistencia para cada jugador en cada clase de la jornada
    for (const jornadaClase of jornadaClases) {
      const jugadores = await prisma.jugador.findMany({
        where: {
          clasesIdClase: jornadaClase.claseId,
          status: "activo",
        },
      });

      const asistenciaPromises = jugadores.map(jugador =>
        prisma.asistencia.create({
          data: {
            jugadorId: jugador.playerId,
            claseId: jornadaClase.claseId,
            jornadaId: jornadaClase.jornadaId,
            asistencia: false, // Registra asistencia como false
          },
        })
      );

      await Promise.all(asistenciaPromises);
    }

    // Cambiar el estado de la jornada a "Desarrollo"
    await prisma.jornadaEntrenamiento.update({
      where: {
        idJornadaEntrenamiento: idJornadaEntrenamiento,
      },
      data: {
        estado: "Desarrollo",
      },
    });

    console.log(`Successfully initiated jornada de entrenamiento with ID ${idJornadaEntrenamiento}`);
    return true;
  } catch (error) {
    console.error("Error iniciando la jornada de entrenamiento:", error);
    throw error;
  }
}

