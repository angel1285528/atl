'use server'
import { PrismaClient, Prisma, JornadaEntrenamiento } from "@prisma/client";

const prisma = new PrismaClient();

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
