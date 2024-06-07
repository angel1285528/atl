"use client"
import GenericHR from "@/components/ui/GenericHorizontalLine";
import FormularioTemporadas from "./componets/formularioTemporadas";
import { Temporadas } from "@prisma/client";
import DataTableTemporadas from "./componets/dataTableTemporadas";
import { columnasTemporadas } from "../entrenamientos/componentes/columnasTablaTemporadas";
import { fetchTemporadas } from "./lib/fetchTemporadas";
import { useState, useEffect } from "react";

const Page: React.FC = () => {
  const [data, setData] = useState<Temporadas[]>([]);

  const loadTemporadas = async () => {
    const data = await fetchTemporadas();
    setData(data);
  };

  useEffect(() => {
    loadTemporadas();
  }, []);

  const handleSeasonCreated = () => {
    loadTemporadas();
  };

  return (
    <>
      <GenericHR />
      <h1 className="text-center font-bold text-3xl my-4">Temporadas</h1>
      <GenericHR />
      <DataTableTemporadas columns={columnasTemporadas} data={data} />
      <FormularioTemporadas onSeasonCreated={handleSeasonCreated} />
    </>
  );
};

export default Page;
