'use server';

import prisma from '@/app/lib/prisma';
import { Entrenamientos } from '@prisma/client';

export const createEntrenamientos = async (data: Partial<Entrenamientos>) => {
  try {
    const newEntrenamiento = await prisma.entrenamientos.create({
      data: {
        fechaEntrenamiento: data.fechaEntrenamiento || new Date(),
        sesionActiva: data.sesionActiva ?? false,  // Usa el valor por defecto si no se proporciona
      },
    });
    console.log('Nuevo entrenamiento creado:', newEntrenamiento);
    return newEntrenamiento;
  } catch (error) {
    console.error('Error creando el entrenamiento:', error);
    throw new Error(`Error creating player: ${error}`);
  }
};
