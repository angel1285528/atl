'use server'
import prisma from "@/app/lib/prisma";


export const fetchPlayer = async () => {
    const player = await prisma.jugador.findMany();
    return player;
};

export const JugadoresTotales = async (): Promise<number> => {
    const totalJugadores = await prisma.jugador.count({
        where: {
            status: 'activo'
        }
    });
    console.log(totalJugadores);
    return totalJugadores;
}
