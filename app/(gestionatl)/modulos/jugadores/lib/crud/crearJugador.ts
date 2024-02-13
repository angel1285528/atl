import prisma from "@/app/lib/prisma";
import { interfacePlayer } from "../interfacePlayer";



export const createPlayer = async (playerData: interfacePlayer) => {
  try {
    const player = await prisma.jugador.create({
      data: {
        playerPhoto: playerData.playerPhoto,
        playerFechaRegistro: playerData.playerFechaRegistro,
        playerFirstName: playerData.playerFirstName,
        playerLastName: playerData.playerLastName,
        playerSecondLastName: playerData.playerSecondLastName,
        categoria: playerData.categoria,
        playerCurp: playerData.playerCurp,
        fechaNacimiento: playerData.fechaNacimiento,
        cuota: playerData.cuota,
        status: playerData.status,
        fingerprint: playerData.fingerprint,
        socioid: playerData.socioId,
      },
    });

    return player;
  } catch (error) {
    console.error("Error al crear un nuevo jugador:", error);
    throw error;
  }
}