'use server';
import prisma from "@/app/lib/prisma";
import { PrismaClient, JornadaEntrenamiento } from "@prisma/client";

// Crear muchas jornadas de entrenamiento

export async function createManyJornadas(jornadas: Omit<JornadaEntrenamiento, 'idJornadaEntrenamiento'>[]) {
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
    const result = await prisma.jornadaEntrenamiento.delete({
      where: {
        idJornadaEntrenamiento: id,
      },
    });
    console.log(`Successfully deleted jornada de entrenamiento with ID ${id}`);
    return result;
  } catch (error) {
    console.error("Error deleting jornada de entrenamiento:", error);
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

export const iniciarJornada = async (jornadaId: number) => {
  try {
    await prisma.jornadaEntrenamiento.update({
      where: { idJornadaEntrenamiento: jornadaId },
      data: { estado: 'Realizada' },
    });
  } catch (error) {
    console.error("Error al actualizar:", error)
    throw error;
  }
};
