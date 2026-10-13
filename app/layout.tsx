import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Academia Tigres Linares",
    template: "%s · Academia Tigres Linares",
  },
  description: "Sitio oficial y plataforma de gestión de Academia Tigres Linares",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
