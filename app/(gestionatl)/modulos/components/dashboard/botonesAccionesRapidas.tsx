import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import IniciarEntrenamientoButton from "@/components/ui/nuevoEntrenamientoBtn";
const accionesRápidas =[ 
  {
    Button: <IniciarEntrenamientoButton />
  },
];
  // {
  //   name: "Registar Familia",
  //   link: "/modulos/socios/nuevosocio",
  //   icon: "👨‍👩‍👧‍👦", // Puedes reemplazar esto con el ícono que desees
  // },
  // {
  //   name: "Pago Mensualidad",
  //   link: "/",
  //   icon: "💳", // Puedes reemplazar esto con el ícono que desees
  // },
  // {
  //   name: "Encargo Uniforme Oficial",
  //   link: "/",
  //   icon: "🎽", // Puedes reemplazar esto con el ícono que desees
  // },
  // {
  //   name: "Estados de Cuenta",
  //   link: "",
  //   icon: "📄", // Puedes reemplazar esto con el ícono que desees
  // },

const BotonesAccionesRápidas: React.FC = () => {
  return (
    <>
    <div id="Titulo Botones">
        <h3 className="text-3xl text-blue-800 font-bold text-center">Acciones Rápidas</h3>
    </div>
    <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
      {accionesRápidas.map((accion, index) => (
          <div key={index} className="my-2 md:my-0">
          {accion.Button}
            
          </div>
      ))}
      </div>
    
      </>
  );
};

export default BotonesAccionesRápidas;
