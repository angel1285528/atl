//Función para crear socio en base de datos con prisma ORM

'use server'
import { PrismaClient } from '@prisma/client';
import { interfaceSocio } from '../interfaces/interfaceSocio';

const prisma = new PrismaClient()

export const createSocio = async (socioData: interfaceSocio) => {
  try {
    
    const socio = await prisma.socio.create({
      data: {
        id: socioData.id,
        firstName: socioData.firstName,
        lastName: socioData.lastName,
        secondLastName: socioData.secondLastName,
        street: socioData.street,
        streetNumber: socioData.streetNumber,
        colonia: socioData.colonia,
        postalCode: socioData.postalCode,
        city: socioData.city,
        state: socioData.state,
        phoneNumber: socioData.phoneNumber,
        email: socioData.email,
        urlSocioPhoto: socioData.urlSocioPhoto,
        urlSocioIne: socioData.urlSocioIne,
        urlIdDomicilio: socioData.urlIdDomicilio,
        periodoDePago: socioData.periodoDePago
      },
    });


    return socio;
  } catch (error) {
    // Aquí puedes manejar el error como prefieras
    console.error("Error al crear un nuevo socio:", error);

    throw error;
  }
};


