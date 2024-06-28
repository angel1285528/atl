'use server';
import prisma from "../prisma";
import { JornadaEntrenamiento, Clases } from "@prisma/client";

// Obtener todas las jornadas
export const fetchJornadas = async (): Promise<JornadaEntrenamiento[]> => {
  try {
    const jornadas = await prisma.jornadaEntrenamiento.findMany({
       orderBy: {
        fechaJornadaEntrenamiento: 'asc',
      },
    });
    return jornadas;
  } catch (error) {
    console.error("Error al cargar las jornadas:", error);
    throw error;
  }
};

// Obtener todas las clases
export const fetchClases = async (): Promise<Clases[]> => {
  try {
    const clases = await prisma.clases.findMany();
    return clases;
  } catch (error) {
    console.error("Error al cargar las clases:", error);
    throw error;
  }
};

// Programar clase en una jornada
export const programarClaseEnJornada = async (jornadaId: number, claseId: string) => {
  try {
    const result = await prisma.jornadaClase.create({
      data: {
        jornadaId,
        claseId,
      },
    });
    return result;
  } catch (error) {
    console.error("Error al programar clase en jornada:", error);
    throw error;
  }
};

// Actualizar programación de clase en una jornada
export const actualizarClaseEnJornada = async (jornadaId: number, claseId: string, nuevosDatos: { jornadaId?: number, claseId?: string }) => {
  try {
    const result = await prisma.jornadaClase.update({
      where: {
        jornadaId_claseId: {
          jornadaId,
          claseId,
        },
      },
      data: nuevosDatos,
    });
    return result;
  } catch (error) {
    console.error("Error al actualizar clase en jornada:", error);
    throw error;
  }
};

// Eliminar programación de clase en una jornada
export const eliminarClaseEnJornada = async (jornadaId: number, claseId: string) => {
  try {
    const result = await prisma.jornadaClase.delete({
      where: {
        jornadaId_claseId: {
          jornadaId,
          claseId,
        },
      },
    });
    return result;
  } catch (error) {
    console.error("Error al eliminar clase en jornada:", error);
    throw error;
  }
};

export async function fetchJornadasConClases() {
  try {
    const jornadasConClases = await prisma.jornadaEntrenamiento.findMany({
      include: {
        clases: {
          include: {
            clase: true,
          },
        },
      },
    });
    return jornadasConClases;
  } catch (error) {
    console.error("Error obteniendo jornadas con clases:", error);
    throw error;
  }
}



export async function getAlumnosPorClase(jornadaId: number) {
  return await prisma.jornadaClase.findMany({
    where: { jornadaId },
    include: {
      clase: {
        include: {
          alumnos: true,
        },
      },
    },
  });
}
