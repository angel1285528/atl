import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth, canAccessDashboard } from "@/lib/auth";

import SignOutButton from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/login");
  }

  if (!canAccessDashboard(session.user.role)) {
    redirect("/login?error=sin-acceso");
  }

  return (
    <main className="page-shell">
      <section className="dashboard-panel">
        <p className="eyebrow">GestionATL</p>
        <h1>Dashboard en construcción</h1>
        <SignOutButton />
      </section>
    </main>
  );
}
