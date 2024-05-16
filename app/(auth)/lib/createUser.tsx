"use server"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

interface User{
    email: string
}
export const createUser = async (userData: User) => {
    try {
        const user = await prisma.user.create ({
            data: {
                email: userData.email
            },
        });
        return user;
    } catch (error) {
        throw new Error(`Error creating user: ${error}`);
    }
}