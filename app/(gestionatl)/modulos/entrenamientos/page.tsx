import GenericHeaderModule from "@/components/ui/genericModulHeader";
import React from "react";
import GenericLinkButton from "../components/dashboard/GenericLinkButton";
import GenericDataTable from "@/components/ui/genericDataTable";
import { CalendarDays } from "lucide-react";
import { fetchJornadasConClases } from "@/app/lib/crud/crudClases";
import { columnasJornadas } from "./componentes/columnasJornadaEntrenamiento";
import { DataTableViewOptions } from "@/components/ui/dataTableViewOptions";


export const dynamic = 'force-dynamic';

const nuevaJornada = "entrenamientos/nuevaJornada/";

const Page = async () => {
  const data = await fetchJornadasConClases();
  return (
    <>
      <div className="container mx-auto py-5">
        <GenericHeaderModule text="Jornadas de Entrenamiento" />
        
        <div id="actionsButtons" className="flex justify-center">
          <GenericLinkButton
            text="Programar Jornadas"
            url={nuevaJornada}
            icon={<CalendarDays />}
          />
        </div>

        

        <GenericDataTable columns={columnasJornadas} data={data} />
      </div>
    </>
  );
};

export default Page;