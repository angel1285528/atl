'use server'
import { PrismaClient, Prisma, Relationship as PrismaRelationship } from '@prisma/client';
import { interfaceFamiliares } from '@/app/lib/interface'; // Adjust the import path accordingly

const prisma = new PrismaClient();

export async function createFamiliar(familiarData: interfaceFamiliares) {
  try {
    const newFamiliar = await prisma.familiares.create({
      data: {
        familyFirstName: data.familyFirstName,
        familyLastName: data.familyLastName,
        familySecondLastName: data.familySecondLastName,
        familyPhoneNumber: data.familyPhoneNumber,
        familyEmail: data.familyEmail,
        familyRelationship: data.familyRelationship,
        socioId: data.socioId,
      },
    });

    return newFamiliar;
  } catch (error) {
    console.error("Error al crear un nuevo familiar: ", error);
    throw error;
  }
}