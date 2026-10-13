"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function signOut() {
    setIsSubmitting(true);
    await authClient.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      className="admin-signout"
      type="button"
      onClick={signOut}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Cerrando…" : "Cerrar sesión"}
    </button>
  );
}
