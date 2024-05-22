// actualizarFotoSocio.ts
"use server";
import prisma from "@/app/lib/prisma";

export const actualizarFotoSocio = async (data: { entityId: string; PhotoUrl: string }) => {
  try {
    const foto = await prisma.socio.update({
      where: {
        id: data.entityId,
      },
      data: {
        urlSocioPhoto: data.PhotoUrl,
      },
    });
    return foto;
  } catch (error) {
    throw new Error("Error actualizando la foto del socio");
  }
};

