// app/page.tsx
import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

export default function Page() {
  async function createUser(formData) {
    'use server';
    const { name } = Object.fromEntries(formData);
    const newUser = await prisma.user.create({
      data: { name },
    });
    return newUser;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = await createUser(formData);
    console.log('Nuevo usuario creado:', user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <button type="submit">Crear Usuario</button>
    </form>
  );
}
