'use server'
import { PrismaClient } from '@prisma/client';
import { interfaceFamiliares } from '@/app/lib/interface';


const prisma = new PrismaClient();

export const createFamiliar = async (familiarData: interfaceFamiliares) => {
  try {
    const familiar = await prisma.familiares.create({
      data: {
        familyFirstName: familiarData.familyFirstName,
        familyLastName: familiarData.familyLastName,
        familySecondLastName: familiarData.familySecondLastName,
        familyEmail: familiarData.familyEmail,
        familyPhoneNumber: familiarData.familyPhoneNumber,
        familyRelationship: familiarData.familyRelationship,
        socioId: familiarData.socioId
        
      }
    });

    return familiar;
  } catch (error) {
    console.error("Error al crear un nuevo familiar:", error);
    throw error;
  }
}