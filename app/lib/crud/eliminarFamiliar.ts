'use server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export const eliminarFamiliar = async (familyId: string) => {
    const familiares = await prisma.familiares.delete({
        where: {
            familyId: familyId
        }
    })
};