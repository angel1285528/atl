'use server'
import prisma from "@/app/lib/prisma";


export const fetchSocios = async () => {
    const socios = await prisma.socio.findMany();
    return socios;
};

