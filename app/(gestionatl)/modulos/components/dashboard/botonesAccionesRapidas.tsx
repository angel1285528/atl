import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const accionesRápidas = [
  {
    name: "Nueva Sesión Entrenamiento",
    link: "/modulos/socios/nuevosocio",
    icon: "🏋️", // Puedes reemplazar esto con el ícono que desees
  },
  {
    name: "Registar Familia",
    link: "/modulos/socios/nuevosocio",
    icon: "👨‍👩‍👧‍👦", // Puedes reemplazar esto con el ícono que desees
  },
  {
    name: "Pago Mensualidad",
    link: "/",
    icon: "💳", // Puedes reemplazar esto con el ícono que desees
  },
  {
    name: "Encargo Uniforme Oficial",
    link: "/",
    icon: "🎽", // Puedes reemplazar esto con el ícono que desees
  },
  {
    name: "Estados de Cuenta",
    link: "",
    icon: "📄", // Puedes reemplazar esto con el ícono que desees
  },
];

const BotonesAccionesRápidas: React.FC = () => {
  return (
    <>
    <div id="Titulo Botones">
        <h3 className="text-3xl text-blue-800 font-bold text-center">Acciones Rápidas</h3>
    </div>
    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
      {accionesRápidas.map((accion, index) => (
          <Link key={index} href={accion.link} className="my-2 md:my-0">
          <Button className="flex flex-col items-center p-2 md:flex-row md:px-4 md:py-2 bg-green-500 text-white rounded-full md:rounded-lg">
            <span className="text-2xl md:mr-2">{accion.icon}</span>
            <span className="text-sm md:text-base">{accion.name}</span>
          </Button>
        </Link>
      ))}
    </div>
      </>
  );
};

export default BotonesAccionesRápidas;
