'use server';

import prisma from '@/app/lib/prisma';
import { JornadaEntrenamiento } from '@prisma/client';

export const createEntrenamientos = async (data: Partial<JornadaEntrenamiento>) => {
  try {
    const newEntrenamiento = await prisma.jornadaEntrenamiento.create({
      data: {
        fechaJornadaEntrenamiento: data.fechaJornadaEntrenamiento || new Date(),
        estado: data.estado,  // Usa el valor por defecto si no se proporciona
      },
    });
    console.log('Nuevo entrenamiento creado:', newEntrenamiento);
    return newEntrenamiento;
  } catch (error) {
    console.error('Error creando el entrenamiento:', error);
    throw new Error(`Error creating player: ${error}`);
  }
};
