'use server'

import prisma from '@/app/lib/prisma';



export const eliminarFamiliar = async (familyId: string) => {
    const familiares = await prisma.familiares.delete({
        where: {
            familyId: familyId
        }
    })
};