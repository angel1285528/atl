'use server'
import { PrismaClient } from '@prisma/client';
import { interfaceSocio } from './interface';

const prisma = new PrismaClient();

export const createSocio = async (socioData : interfaceSocio) => {
    try {
        const socio = await prisma.socio.create({
          data: {
            firstName: socioData.firstName,
            lastName: socioData.lastName,
            secondLastName: socioData.secondLastName,
            email: socioData.email,
            phoneNumber: socioData.phoneNumber,
            work: socioData.work,
            scholarity: socioData.scholarity
          },
        });
        return socio;
      } catch (error) {
        // Aquí puedes manejar el error como prefieras
        console.error("Error al crear un nuevo socio:", error);
        throw error;
      }
    };

    export async function getSocios() {
  try {
    const socios = await prisma.socio.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
        
      },
    });
    return socios;
  } catch (error) {
    console.error("Error fetching socios: ", error);
    throw error;
  }
}