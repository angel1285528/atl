"use server"
import prisma from "@/app/lib/prisma";
import { Temporadas } from "@prisma/client";

export const createSeason = async (Temporadadata: Temporadas) => {
    try {
        const temporada = await prisma.temporadas.create({
            data: {
                ...Temporadadata,
                fechaInicioTemporada: new Date(Temporadadata.fechaInicioTemporada),
                fechaFinTemporada: new Date(Temporadadata.fechaFinTemporada),
            }
        });
        return temporada;
    } catch (error) {
        throw new Error(`Error creating temporada: ${error}`);
    }
}
