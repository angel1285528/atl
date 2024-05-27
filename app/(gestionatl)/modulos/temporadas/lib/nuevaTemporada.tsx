"use server"
import prisma from "@/app/lib/prisma";
import { Temporadas } from "@prisma/client";

export const createSeason = async (Temporadadata: Temporadas ) => {
    try {
        const temporada = await prisma.temporadas.create({
            data: {
                Temporada: Temporadadata.Temporada,
                fechaIncioTemporada:Temporadadata.fechaIncioTemporada,
                fechaFinTemporada: Temporadadata.fechaIncioTemporada,
           }
        })
        return temporada;
    } catch (error) {
        throw new Error (`Error creating player: ${error}`);
    }
}

