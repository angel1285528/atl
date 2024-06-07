// utils/prisma.ts
import prisma from '@/app/lib/prisma';



const  fetchPlayersByCategory = async (categoria: string) => {
    const players = await prisma.jugador.findMany({
        where: {
            categoria: categoria,
            status: 'activo'
        }
    });
    return players;
};
export default fetchPlayersByCategory