'use server';
import prisma from "../prisma";
import { JornadaEntrenamiento, Clases, $Enums } from "@prisma/client";

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

export const fetchJornadasProgramadas = async (): Promise<JornadaEntrenamiento[]> => {
  try {
    const jornadas = await prisma.jornadaEntrenamiento.findMany({
      where: {
        estado: "Programada",
      },
      orderBy: {
        fechaJornadaEntrenamiento: 'asc',
      },
    });
    return jornadas;
  } catch (error) {
    console.error("Error al cargar las jornadas programadas:", error);
    throw error;
  }
};

// Obtener todas las clases
export const fetchClases = async (): Promise<{ idClase: string; tipo: $Enums.TipoClase }[]> => {
  try {
    const clases = await prisma.clases.findMany({
      select: {
        idClase: true,
        tipo: true,
      },
    });
    return clases;
  } catch (error) {
    console.error("Error fetching classes:", error);
    return [];
  }
};



// Programar varias clases en varias jornadas
export const programarClasesEnJornadas = async (registros: { jornadaId: number, claseId: string }[]) => {
  try {
    const result = await prisma.jornadaClase.createMany({
      data: registros,
      skipDuplicates: true, // Opcional, evita errores si el registro ya existe
    });
    return result;
  } catch (error) {
    console.error("Error al programar clases en jornadas:", error);
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
      where: {
        estado: {
         in: ["Desarrollo", "Programada"]
        }
                
          } 
        
           

      
      
    });
    return jornadasConClases;
  } catch (error) {
    console.error("Error obteniendo jornadas con clases:", error);
    throw error;
  }
}

export async function getAlumnosPorClase(jornadaId: number) {
  const clases = await prisma.jornadaClase.findMany({
    where: { jornadaId },
    include: {
      clase: {
        include: {
          alumnos: {
            where: { status: 'activo' }, // Only fetch active players
            include: {
              Asistencias: {
                where: { jornadaId },
              },
            },
          },
        },
      },
    },
  });

  return clases.map(jornadaClase => ({
    ...jornadaClase,
    clase: {
      ...jornadaClase.clase,
      alumnos: jornadaClase.clase.alumnos
        .map(alumno => ({
          ...alumno,
          asistencia: alumno.Asistencias.length > 0 ? alumno.Asistencias[0].asistencia : false,
        }))
        .filter(alumno => !alumno.asistencia), // Filter students with asistencia false
    },
  }));
}

