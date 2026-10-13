import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";

import prisma from "@/app/lib/prisma";

const authSecret =
  process.env.BETTER_AUTH_SECRET ??
  (process.env.NODE_ENV === "development"
    ? "gestion-atl-local-development-secret-do-not-use-in-production"
    : undefined);

if (!authSecret) {
  throw new Error("BETTER_AUTH_SECRET es obligatorio fuera del entorno local.");
}

export const auth = betterAuth({
  appName: "GestionATL",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: authSecret,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
    minPasswordLength: 12,
    maxPasswordLength: 128,
  },
  session: {
    expiresIn: 60 * 60 * 12,
    updateAge: 60 * 60,
  },
  rateLimit: {
    enabled: true,
    storage: "database",
    window: 60,
    max: 30,
    customRules: {
      "/sign-in/email": {
        window: 60,
        max: 5,
      },
    },
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  plugins: [
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});

export const DASHBOARD_ROLES = new Set(["admin", "entrenador", "auxiliar"]);

export function canAccessDashboard(role?: string | null) {
  return (role ?? "")
    .split(",")
    .some((candidate) => DASHBOARD_ROLES.has(candidate.trim()));
}
