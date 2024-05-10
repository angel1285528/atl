'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const fetchSocios = async () => {
    const socios = await prisma.socio.findMany();
    return socios;
};

