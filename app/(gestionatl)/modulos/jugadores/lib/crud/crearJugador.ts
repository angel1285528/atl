"use server"
import prisma from "@/app/lib/prisma";
import { interfacePlayer } from "../interfacePlayer";


export const createPlayer = async (playerData: interfacePlayer) => {
  try {
    const player = await prisma.jugador.create({
      data: {
        playerId: playerData.playerId,
        playerPhoto: playerData.playerPhoto,
        playerFechaRegistro: playerData.playerFechaRegistro,
        playerFirstName: playerData.playerFirstName,
        playerLastName: playerData.playerLastName,
        playerSecondLastName: playerData.playerSecondLastName,
        categoria: playerData.categoria,
        fechaNacimiento: playerData.fechaNacimiento,
        lugarNacimiento: playerData.lugarNacimiento,
        school: playerData.school,
        schoolarGrade: playerData.schoolarGrade,
        playerCellPhone: playerData.playerCellPhone,
        playerEmail: playerData.playerEmail,
        tipoCuota: playerData.tipoCuota,
        importeMensualidad: playerData.importeMensualidad,
        status: playerData.status,
        actaDeNacimientoURL: playerData.actaDeNacimientoURL,
        actaDeNacimiento: playerData.actaDeNacimiento,
        curpUrl: playerData.curpUrl,
        curp: playerData.curp,
        identificacionUrl: playerData.identificacionUrl,
        identificacion: playerData.identificacion,
        socioId: playerData.socioId,
      },
    });

    return player;
  } catch (error) {
    console.error("Error al crear un nuevo jugador:", error);
    throw error;
  }
};
