"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const result = await authClient.signIn.email({
        email,
        password,
        rememberMe: false,
      });

      if (result.error) {
        setError("No fue posible iniciar sesión. Verifica tus credenciales.");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } catch {
      setError("No fue posible iniciar sesión. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="auth-form"
      method="post"
      action="/login"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="username"
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        minLength={12}
        required
      />

      {error ? <p className="form-error" role="alert">{error}</p> : null}

      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Validando…" : "Entrar"}
      </button>

      <Link className="secondary-link" href="/">
        Volver al inicio
      </Link>
    </form>
  );
}
