'use server'
import prisma from '@/app/lib/prisma';

export const updateAsistencia = async (jugadorId: string, claseId: string) => {
  try {
    await prisma.asistencia.updateMany({
      where: {
        jugadorId,
        claseId,
        asistencia: false,
        partidoProgramado: false,
      },
      data: {
        asistencia: true,
      },
    });
  } catch (error) {
    throw error;
  }
};
