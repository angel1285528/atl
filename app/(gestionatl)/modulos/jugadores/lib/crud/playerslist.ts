'use server'
import prisma from "@/app/lib/prisma";




export const fetchPlayer = async () => {
    const player = await prisma.jugador.findMany();
    return player;
};