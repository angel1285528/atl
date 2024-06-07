'use server'
import prisma from '@/app/lib/prisma'
import { JornadaEntrenamiento } from '@prisma/client';

export const createJornada = async (data: JornadaEntrenamiento ) =>{
try{
const  newJornada = await prisma.jornadaEntrenamiento.create({
data: {
...data
}
});
return newJornada;
} catch (error) {
throw new Error(`Error creating player: error`);
}
};