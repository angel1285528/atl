'use server'
import prisma from "@/app/lib/prisma";
import { jugador } from "@prisma/client";
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

export async function updateAttendanceRecords(jornadaId: number) {
  try {
    // Fetch all attendance records for the given jornada
    const attendanceRecords = await prisma.asistencia.findMany({
      where: { jornadaId },
    });

    // Update each attendance record
    const updatePromises = attendanceRecords.map(async (record) => {
      if (record.asistencia) {
        // If the player attended, reset absences
        return prisma.jugador.update({
          where: { playerId: record.jugadorId }, // Correct where clause to match jugador model
          data: { faltasCount: 0 },
        });
      } else {
        // If the player didn't attend, increment absences
        return prisma.jugador.update({
          where: { playerId: record.jugadorId }, // Correct where clause to match jugador model
          data: {
            faltasCount: {
              increment: 1,
            },
          },
        });
      }
    });

    // Execute all updates
    await Promise.all(updatePromises);

    console.log('Attendance records and player absence counts updated successfully');
  } catch (error) {
    console.error('Error updating attendance records and player absence counts:', error);
    throw error; // Re-throw the error so it can be caught in the calling function
  }
}


