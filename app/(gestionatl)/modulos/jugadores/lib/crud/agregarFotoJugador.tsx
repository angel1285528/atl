// actualizarFoto.ts
"use server";
import { jugador } from "@prisma/client";
import prisma from "@/app/lib/prisma";

export const actualizarFoto = async (data: { entityId: string; PhotoUrl: string }) => {
  try {
    const foto = await prisma.jugador.update({
      where: {
        playerId: data.entityId,
      },
      data: {
        playerPhotoUrl: data.PhotoUrl,
      },
    });
    return foto;
  } catch (error) {
    throw new Error("Error actualizando la foto del jugador");
  }
};
