import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth, canAccessDashboard } from "@/lib/auth";

import SignOutButton from "./sign-out-button";

const modules = [
  "Inicio", "Socios", "Jugadores", "Finanzas", "Entrenamientos",
  "Grupos de entrenamiento", "Torneos y copas", "Entrenadores",
  "Comité de familias", "Festejos", "Temporadas", "Gestión de usuarios",
];

const moduleCards = [
  { code: "SO", title: "Socios", description: "Registro y consulta de familias" },
  { code: "JU", title: "Jugadores", description: "Expedientes y datos deportivos" },
  { code: "EN", title: "Entrenadores", description: "Personal deportivo y auxiliares" },
];

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) redirect("/login");
  if (!canAccessDashboard(session.user.role)) redirect("/login?error=sin-acceso");

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><span className="admin-brand__crest">ATL</span><div><strong>Sistema de Gestión</strong><small>Academia Tigres Linares</small></div></div>
        <nav className="admin-navigation" aria-label="Módulos en construcción">
          {modules.map((module, index) => (
            <button key={module} type="button" disabled className={index === 0 ? "is-current" : ""}><span>{String(index + 1).padStart(2, "0")}</span>{module}</button>
          ))}
        </nav>
        <div className="admin-sidebar__footer"><span>DEVELOP</span><small>Esqueleto sin conexiones</small></div>
      </aside>

      <section className="admin-workspace">
        <header className="admin-topbar"><div><span>GESTIÓN</span><strong>/ Dashboard</strong></div><SignOutButton /></header>
        <div className="admin-content">
          <div className="admin-title-row"><div><p>RESUMEN GENERAL</p><h1>Dashboard ATL</h1></div><span className="status-pill"><i /> MAQUETA ESTÁTICA</span></div>

          <section className="dashboard-block" aria-labelledby="quick-actions-title">
            <div className="dashboard-section-title"><span>01</span><h2 id="quick-actions-title">Acciones rápidas</h2></div>
            <div className="quick-actions">
              <button type="button" disabled><span>▶</span><strong>Jornada de entrenamiento</strong><small>Módulo pendiente</small></button>
              <button type="button" disabled><span>$</span><strong>Estados de cuenta</strong><small>Módulo pendiente</small></button>
              <button type="button" disabled><span>+</span><strong>Registrar jugador</strong><small>Módulo pendiente</small></button>
            </div>
          </section>

          <section className="dashboard-block" aria-labelledby="census-title">
            <div className="dashboard-section-title"><span>02</span><h2 id="census-title">Censo de la academia</h2></div>
            <div className="stat-grid">
              <article className="stat-card stat-card--yellow"><small>JUGADORES ACTIVOS</small><strong>—</strong><p>Sin conexión a datos</p></article>
              <article className="stat-card stat-card--blue"><small>SOCIOS ACTIVOS</small><strong>—</strong><p>Sin conexión a datos</p></article>
              <article className="stat-card stat-card--green"><small>MENSUALIDADES</small><strong>—</strong><p>Sin conexión a datos</p></article>
            </div>
          </section>

          <section className="dashboard-block" aria-labelledby="modules-title">
            <div className="dashboard-section-title"><span>03</span><h2 id="modules-title">Módulos principales</h2></div>
            <div className="module-card-grid">
              {moduleCards.map((module) => (
                <article className="module-card" key={module.title}><span>{module.code}</span><div><h3>{module.title}</h3><p>{module.description}</p></div><i>→</i></article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
