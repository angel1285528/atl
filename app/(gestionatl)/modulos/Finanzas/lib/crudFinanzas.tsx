"use server"
import prisma from "@/app/lib/prisma";
import { conceptosMovimientos, socio, jugador } from "@prisma/client";

// Suma de Importe Mensualidad
export const sumaImporteMensualidad = async (): Promise<number> => {
  const resultado = await prisma.estadoCuentaJugador.aggregate({
    _sum: {
      importeMensualidad: true,
    },
  });

  const sumaTotal = resultado._sum.importeMensualidad || 0;
  console.log(sumaTotal);
  return sumaTotal;
};

// Crear nuevo concepto
export const create = async (data: Omit<conceptosMovimientos, 'idConceptoMovimiento'>) => {
  try {
    const nuevoConcepto = await prisma.conceptosMovimientos.create({
      data: {
        ...data
      }
    });
    return nuevoConcepto;
  } catch (error) {
    console.error("Error creando el concepto:", error);
    throw error;
  }
};

// Crear múltiples conceptos
export const createMany = async (data: Omit<conceptosMovimientos, 'idConceptoMovimiento'>[]) => {
  try {
    const nuevosConceptos = await prisma.conceptosMovimientos.createMany({
      data: data
    });
    return nuevosConceptos;
  } catch (error) {
    console.error("Error creando múltiples conceptos:", error);
    throw error;
  }
};

// Actualizar concepto
export const update = async (id: string, data: Partial<conceptosMovimientos>) => {
  try {
    const conceptoActualizado = await prisma.conceptosMovimientos.update({
      where: { idConceptoMovimiento: id },
      data: {
        ...data
      }
    });
    return conceptoActualizado;
  } catch (error) {
    console.error("Error actualizando el concepto:", error);
    throw error;
  }
};

// Eliminar concepto
export const remove = async (id: string) => {
  try {
    const conceptoEliminado = await prisma.conceptosMovimientos.delete({
      where: { idConceptoMovimiento: id }
    });
    return conceptoEliminado;
  } catch (error) {
    console.error("Error eliminando el concepto:", error);
    throw error;
  }
};

// Buscar concepto por ID
export const findUnique = async (id: string) => {
  try {
    const concepto = await prisma.conceptosMovimientos.findUnique({
      where: { idConceptoMovimiento: id }
    });
    return concepto;
  } catch (error) {
    console.error("Error buscando el concepto:", error);
    throw error;
  }
};

// Buscar todos los conceptos
export const findMany = async () => {
  try {
    const conceptos = await prisma.conceptosMovimientos.findMany();
    return conceptos;
  } catch (error) {
    console.error("Error buscando los conceptos:", error);
    throw error;
  }
};

export const getAllConceptos = async () => {
  try {
    const conceptos = await prisma.conceptosMovimientos.findMany();
    return conceptos;
  } catch (error) {
    console.error('Error obteniendo los conceptos:', error);
    throw error;
  }
};

export const deleteConcepto = async (id: string) => {
  try {
    await prisma.conceptosMovimientos.delete({
      where: { idConceptoMovimiento: id },
    });
  } catch (error) {
    console.error('Error eliminando el concepto:', error);
    throw error;
  }
};

export const getAllSocios = async (): Promise<socio[]> => {
  try {
    const socios = await prisma.socio.findMany();
    return socios;
  } catch (error) {
    console.error('Error obteniendo los socios:', error);
    throw error;
  }
};


export const getJugadoresBySocioId = async (socioId: string): Promise<jugador[]> => {
  try {
    const jugadores = await prisma.jugador.findMany({
      where: {
        socioId: socioId,
      },
    });
    return jugadores;
  } catch (error) {
    console.error('Error obteniendo los jugadores:', error);
    throw error;
  }
};

// Función para obtener todos los conceptos de movimientos
