'use server'
import { PrismaClient } from '@prisma/client';
import { interfaceSocio } from './interface';

const prisma = new PrismaClient();

export const createSocio = async (socioData: interfaceSocio) => {
  try {
    const socio = await prisma.socio.create({
      data: {
        firstName: socioData.firstName,
        lastName: socioData.lastName,
        secondLastName: socioData.secondLastName,
        email: socioData.email,
        phoneNumber: socioData.phoneNumber,
        work: socioData.work,
        scholarity: socioData.scholarity,
        urlSocioPhoto: socioData.urlSocioPhoto,
        urlSocioIne: socioData.urlSocioIne,
      },
    });
    return socio;
  } catch (error) {
    // Aquí puedes manejar el error como prefieras
    console.error("Error al crear un nuevo socio:", error);
    throw error;
  }
};


