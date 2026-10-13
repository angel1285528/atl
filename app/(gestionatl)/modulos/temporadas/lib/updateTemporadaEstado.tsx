'use server'
import prisma from "@/app/lib/prisma";

export const updateTemporadaEstado = async (idPeriodo: number, Estado: boolean) => {
  try {
    await prisma.temporadas.update({
      where: { idPeriodo },
      data: { Estado },
    });
  } catch (error) {
    throw new Error(`Error updating temporada estado: ${error}`);
  }
}
