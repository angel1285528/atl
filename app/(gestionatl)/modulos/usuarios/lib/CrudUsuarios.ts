import prisma from "@/app/lib/prisma";
import { Usuario } from "@prisma/client";
import bcrypt from "bcrypt";

export async function crearUsuario(data: Usuario) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.usuario.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
}

export async function obtenerUsuarios() {
  return prisma.usuario.findMany();
}

export async function actualizarUsuario(id: string, data: Usuario) {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return prisma.usuario.update({
    where: { id },
    data,
  });
}

export async function eliminarUsuario(id: string) {
  return prisma.usuario.delete({
    where: { id },
  });
}