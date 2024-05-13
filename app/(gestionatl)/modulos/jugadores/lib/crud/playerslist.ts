'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const fetchPlayer = async () => {
    const player = await prisma.jugador.findMany();
    return player;
};