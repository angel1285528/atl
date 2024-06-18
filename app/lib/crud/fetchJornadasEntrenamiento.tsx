'use server'
import prisma from "../prisma"
import { JornadaEntrenamiento } from "@prisma/client"

export const fetchJornadasEntrenamiento = async (): Promise <JornadaEntrenamiento[] > => {
try {
    const jornadas = await prisma.jornadaEntrenamiento.findMany();
    return jornadas;
} catch (error) {
    console.error("Error al cargar las jornadas de entrenamiento:", error);
    throw error;
} 

}