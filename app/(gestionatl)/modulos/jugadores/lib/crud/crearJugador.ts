"use server"
import { interfacePlayer } from '../interfacePlayer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createPlayer = async (playerData: interfacePlayer) => {
  
  try {
    const player = await prisma.jugador.create({
      data: {
        playerId: playerData.playerId,
        playerFirstName: playerData.playerFirstName,
        playerLastName: playerData.playerLastName,
        playerSecondLastName: playerData.playerSecondLastName,
        categoria: playerData.categoria,        
        rama: playerData.rama,
        fechaNacimiento:playerData.fechaNacimiento,
        playerPhotoUrl: playerData.playerPhotoUrl,
        playerCellPhone: playerData.playerCellPhone,
        playerEmail: playerData.playerEmail,
        socioId: playerData.socioId,
        
      },
    });
    return player;
  } catch (error) {
    throw new Error(`Error creating player: ${error}`);
  }
};
