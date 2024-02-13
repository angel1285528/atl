import Header from "@/app/(gestionatl)/ui/header";
import '@/app/globals.css'
import { oswald } from "../ui/fonts"
import React from 'react'
import Image from "next/image";
import Sidebar from "./ui/sidebar";

export const metadata = {
  title: 'Modulo de Gestion - ATL',
  description: 'Modulo interno de gestion atl',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className="bg-blue-900">
        <main className={`${oswald.className}  antialiased md:pt-8 pt-2 bg-stone-200 rounded-lg size-11/12 mx-auto my-5 lg:my-4  min-h-screen`}>
          <div id="container" className="flex flex-col md:flex-row">
            < Sidebar />
            <div id="mainFrame" className="flex-1">
              <div id="header" className="hidden md:block">
                <Header />
              </div>
              {children}
            </div>
          </div>

        </main>
      </body>
    </html>
  )
}