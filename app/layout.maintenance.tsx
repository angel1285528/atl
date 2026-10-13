import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./maintenance.css";

export const metadata: Metadata = {
  title: "Sitio en reconstrucción | Academia Tigres Linares",
  description: "Estamos preparando una nueva experiencia.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function MaintenanceLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
