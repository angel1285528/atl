import React from "react";
import GenericHR from "@/components/ui/GenericHorizontalLine";
import GenericLinkButton from "../components/dashboard/GenericLinkButton";
import GenericDataTable from "@/components/ui/genericDataTable";
import { MdAddLink } from "react-icons/md";
import { fetchJornadasEntrenamiento } from "@/app/lib/crud/fetchJornadasEntrenamiento";
import DataTable from "../socios/componentes/tablasocios/data-table";
import { columnasJornadas } from "./componentes/columnasJornadaEntrenamiento";

export const dynamic = 'force-dynamic';

const nuevaJornada = "entrenamientos/nuevaJornada/";

const Page = async () => {
  const data = await fetchJornadasEntrenamiento();
  return (
    <>
      <div className="container mx-auto py-5">
        <h1>Entrenamientos</h1>
        <GenericHR />
        <div id="actionsButtons" className="flex justify-center">
          <GenericLinkButton
            text="Programar Jornadas"
            url={nuevaJornada}
            icon={<MdAddLink />}
          />
        </div>
        <GenericHR />
        <h3> Jornadas de Entrenamiento </h3>
<DataTable columns={columnasJornadas} data={data} />
<GenericDataTable columns={columnasJornadas} data={data} />
      </div>
    </>
  );
};

export default Page;
