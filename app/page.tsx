import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="eyebrow">Academia Tigres Linares</p>
        <h1>GestionATL</h1>
        <p className="lead">
          Nueva plataforma de administración deportiva en construcción.
        </p>
        <Link className="primary-button" href="/login">
          Iniciar sesión
        </Link>
      </section>
    </main>
  );
}
