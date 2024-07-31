'use server'
import prisma from "@/app/lib/prisma";
import { socio, periodoDePago, familiares } from "@prisma/client";



export const createSocio = async (socioData: socio) => {
  try {
    const newSocio = await prisma.socio.create({
      data: {
        ...socioData,
        estadoCuenta: {
          create: {
            periodoPago: socioData.periodoDePago as periodoDePago || periodoDePago.periodo3,
            balance: 0,
          }
        }
      },
      include: {
        estadoCuenta: true,
      },
    });
    

    return newSocio;
  } catch (error) {
    console.error("Error al crear un nuevo socio:", error);
    throw error;
  }
};


export const createFamiliar = async (familiarData: familiares) => {
    try {
      const familiar = await prisma.familiares.create({
        data: {...familiarData
          
        }
      });
  
      return familiar;
    } catch (error) {
      console.error("Error al crear un nuevo familiar:", error);
      throw error;
    }
  }