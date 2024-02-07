'use server'
import { PrismaClient } from '@prisma/client';
import { interfaceSocio } from './interface';
//import { toast, ToastPosition } from 'react-toastify';

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

/*    toast.success('Usuario registrado exitosamente', {
      position: 'top-center' as ToastPosition,
      autoClose: 3000, // Duración de la notificación en milisegundos
    });
    
    window.location.href = `/modulos/socios/`; // Asumiendo que tienes un campo 'id' en tu modelo de socio      */
    return socio;
  } catch (error) {
    // Aquí puedes manejar el error como prefieras
    console.error("Error al crear un nuevo socio:", error);
   toast.error('Error al registrar usuario. Por favor, intenta nuevamente.');
    throw error;
  }
};


