import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import  GitHub from "next-auth/providers/github"
import type { NextAuthConfig as NextAuthConfigType } from "next-auth"
import { signInSchema } from "./app/(auth)/lib/zSchemaSignIn"; 
import { getUserFromDb } from "./app/(auth)/lib/getUserFromDb";
import { ZodError } from "zod"
import type { Provider } from "next-auth/providers"

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
// Notice this is only an object, not a full Auth.js instance

export default {
    providers: [GitHub
      , 
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
    
} satisfies NextAuthConfigType