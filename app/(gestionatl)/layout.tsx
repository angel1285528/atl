import Header from "@/app/(gestionatl)/ui/header";
import '@/app/globals.css'
import { oswald } from "../ui/fonts"
import React from 'react'
import Image from "next/image";

export const metadata = {
  title: 'Modulo de Gestion - ATL',
  description: 'Modulo interno de gestion atl',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //centrar imagen
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body className="bg-blue-900">
        <main className={`${oswald.className}  antialiased pt-8 bg-stone-200 rounded-lg size-11/12 mx-auto my-4 h-screen`}>
          <div id="container" className="flex flew-row">
            <div id="sideBar" className="basis-1/5">

              <div id="sideBarTop" className="flex flex-col justify-center items-center border-b-4 border-blue-800">
                <Image src="/logo-academia.svg" width={120} height={120} alt="Logotipo Academia Tigres" className="object-center" />
                
                <h1 className=" font-bold text-xl">Sistema de Gestión</h1>
                
                <h2 className=" font-bold text-xl">Academia Tigres Linares</h2>
              </div>
              <div id="sideBarMain">
                <ul>
                  <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Inicio</span></li>
                  <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Socios</span></li>
                  <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Jugadores</span></li>
                  <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Entrenadores</span></li>
                  <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Grupos</span></li>
                  <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Equipos</span></li>
                </ul>

              </div>
            </div>
            <div id="mainFrame" className="basis-4/5">

              <Header />
              {children}
            </div>
          </div>

        </main>
      </body>
    </html>
  )
}