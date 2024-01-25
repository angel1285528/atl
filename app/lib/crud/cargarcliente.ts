'use server';
// Importa PrismaClient y Socio desde '@prisma/client'
import { PrismaClient } from '@prisma/client';
import { interfaceSocio } from '../interface';

const prisma = new PrismaClient();

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
    
