import prisma from "./app/lib/prisma";
import bcrypt from "bcrypt";

async function createSuperAdmin() {
  const correo = "info@tigreslinares.com"; // Correo del SuperAdmin
  const contraseña = "Ropa1285528."; // Contraseña del SuperAdmin
  const hashedPassword = await bcrypt.hash(contraseña, 10); // Hash de la contraseña

  try {
    const superAdmin = await prisma.usuario.create({
      data: {
        correo,
        password: hashedPassword,
        telefono: "8211188417",
        creadoPor: "SuperAdmin",
        rol: "SuperAdmin",
      },
    });

    console.log("SuperAdmin creado:", superAdmin);
  } catch (error) {
    console.error("Error creando SuperAdmin:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createSuperAdmin();