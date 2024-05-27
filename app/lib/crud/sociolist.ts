'use server'
import prisma from "@/app/lib/prisma";


export const fetchSocios = async () => {
    const socios = await prisma.socio.findMany();
    return socios;
};

export const SociosTotales = async (): Promise<number> => {
    const totalSocios = await prisma.socio.count();
    console.log(totalSocios);
    return totalSocios;
}
