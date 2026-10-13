import { auth } from "../lib/auth";

type Role = "admin" | "entrenador" | "auxiliar" | "tutor" | "jugador";

function argument(name: string) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

const email = argument("email")?.trim().toLowerCase();
const name = argument("name")?.trim();
const role = argument("role") as Role | undefined;
const password = process.env.GESTIONATL_NEW_USER_PASSWORD;
const allowedRoles = new Set<Role>([
  "admin",
  "entrenador",
  "auxiliar",
  "tutor",
  "jugador",
]);

if (!email || !name || !role || !allowedRoles.has(role) || !password) {
  console.error(
    "Uso: GESTIONATL_NEW_USER_PASSWORD=... npm run auth:create-user -- " +
      "--email correo --name nombre --role admin|entrenador|auxiliar|tutor|jugador",
  );
  process.exit(1);
}

if (password.length < 12) {
  console.error("La contraseña debe tener al menos 12 caracteres.");
  process.exit(1);
}

async function main() {
  const result = await auth.api.createUser({
    body: {
      email: email!,
      name: name!,
      password: password!,
      // Better Auth only exposes built-in roles in this endpoint's static type.
      // Runtime values are restricted by allowedRoles above.
      role: role! as "admin",
    },
  });

  console.log(`Cuenta creada: ${result.user.email} (${result.user.role})`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "No se pudo crear la cuenta.");
  process.exit(1);
});
