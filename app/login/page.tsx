import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth, canAccessDashboard } from "@/lib/auth";

import LoginForm from "./login-form";

export default async function LoginPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user && canAccessDashboard(session.user.role)) {
    redirect("/dashboard");
  }

  return (
    <main className="page-shell">
      <section className="auth-panel" aria-labelledby="login-title">
        <p className="eyebrow">Acceso restringido</p>
        <h1 id="login-title">Iniciar sesión</h1>
        <p className="supporting-text">
          Utiliza la cuenta proporcionada por la administración.
        </p>
        <LoginForm />
      </section>
    </main>
  );
}
