import type { User } from "next-auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getUserFromDb(email: string): Promise<User | null> {
    try {
        const user = await prisma?.user.findUnique ({
            where: {
                email: email
            },
        });
        if (user !== undefined) {
            return user;
        } else {
            return null;
        }
    }
    catch (error) {
        console.error("error", error);
        throw error;
    }
}
