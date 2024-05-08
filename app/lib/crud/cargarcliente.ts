'use server';
// Importa PrismaClient y Socio desde '@prisma/client'
import prisma from '../prisma';
import { interfaceSocio } from '../interfaces/interfaceSocio';



export async function cargarCliente(id: string): Promise<interfaceSocio | null> {
  try {
    console.log("Cargando cliente con ID:", id);
    // Busca el socio por el campo id proporcionado como parámetro
    const socio = await prisma.socio.findUnique({
      where: {
        id: id,
      },
    });
    console.log("Socio cargado:", socio);
    return socio;
  } catch (error) {
    // Manejar el error según sea necesario
    console.error("Error al cargar el cliente:", error);
    throw error;
  }
}
    
