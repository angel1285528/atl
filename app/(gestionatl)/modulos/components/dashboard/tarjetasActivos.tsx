'use client'
import React, { useState, useEffect } from "react";
import GenericCardInfo from "./genericCardInfo";
import { JugadoresTotales } from "../../jugadores/lib/crud/playerslist";
import { SociosTotales } from "@/app/lib/crud/sociolist";

const ActivosTotales: React.FC = () => {
  const [jugadoresTotales, setJugadoresTotales] = useState<number | null>(null);
  const [sociosTotales, setSociosTotales] = useState<number | null>(null);

  useEffect(() => {
    const fetchJugadoresTotales = async () => {
      const total = await JugadoresTotales();
      setJugadoresTotales(total);
    };

    const fetchSociosTotales = async () => {
      const total = await SociosTotales();
      setSociosTotales(total);
    };

    fetchJugadoresTotales();
    fetchSociosTotales();
  }, []);

  return (
    <>
      <section
        id="mainData"
        className="flex flex-col justify-star border-b-blue-900 border-4 w-2/5"
      >
        <div id="titulo">
          
    <p className="pl-8 font-extrabold text-xl">Censo de Jugadores</p>
        </div>
        <GenericCardInfo
          bgColor="bg-white"
          
          borderColor="border-l-yellow-500"
          text="Jugadores Activos"
          data={jugadoresTotales}
        />
        <GenericCardInfo
          bgColor="bg-white"
          borderColor="border-l-blue-500"
          text="Socios Activos"
          data={sociosTotales}
        />
      </section>
    </>
  );
};

export default ActivosTotales;
