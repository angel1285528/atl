import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { ZodError } from "zod"
import { signInSchema } from "@/app/(auth)/lib/zSchemaSignIn"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { getUserFromDb } from "./app/(auth)/lib/getUserFromDb"
import GitHub from "next-auth/providers/github"


const prisma = new PrismaClient();

const providers: Provider[] = [GitHub,
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    authorize(c) {
      if (c.password !== "password") return null
      return {
        id: "test",
        name: "Test User",
        email: "test@example.com",
      }
    },
  })
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
}
)

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
        },
      }
    },
  },
  providers: [GitHub, 
    Credentials({
      credentials: {
        email: {},
        password: {},
      } satisfies NextAuthConfig,
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);
          // Saltar y hashear la contraseña
          const pwHash = saltAndHashPassword(password);
          const user = await getUserFromDb(email, pwHash);
          if (!user) {
            throw new Error("User not found.");
//Incluir mensaje para solicitar acceso a la aplicación
          }
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
          // Manejar otros errores aquí
          console.error(error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
    signOut: "auth/sign-out"
  },
  
}
) 
