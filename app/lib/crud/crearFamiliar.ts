'use server'
import { interfaceFamiliares } from '@/app/lib/interfaces/interfaceSocio';
import prisma from "@/app/lib/prisma";

export const createFamiliar = async (familiarData: interfaceFamiliares) => {
  try {
    const familiar = await prisma.familiares.create({
      data: {
        familyFirstName: familiarData.familyFirstName,
        familyLastName: familiarData.familyLastName,
        familySecondLastName: familiarData.familySecondLastName,
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