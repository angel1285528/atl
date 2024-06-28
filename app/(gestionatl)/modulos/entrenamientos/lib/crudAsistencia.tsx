'use server'
import prisma from "@/app/lib/prisma";

export const updateAsistencia = async (jugadorId: string, jornadaId: number, claseId: string, asistencia: boolean) => {
  try {
    await prisma.asistencia.upsert({
      where: {
        jugadorId_jornadaId_claseId: {
          jugadorId,
          jornadaId,
          claseId
        }
      },
      update: {
        asistencia,
        asistenciaJustificada: false,
        partidoProgramado: false
      },
      create: {
        jugadorId,
        jornadaId,
        claseId,
        asistencia,
        asistenciaJustificada: false,
        partidoProgramado: false
      }
    });
  } catch (error) {
    throw new Error(`Error updating asistencia: ${error}`);
  }
};

export const countAsistencia = async (jornadaId: number) => {
  try {
    const count = await prisma.asistencia.count({
      where: {
        jornadaId: jornadaId,
        asistencia: true
      }
    });
    return count;
  } catch (error) {
    throw new Error(`Error counting asistencia: ${error}`);
  }
};
