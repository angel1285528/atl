'use client'
import React from "react";
import GenericHeaderModule from "@/components/ui/genericModulHeader";
import GenericLinkButton from "../components/dashboard/GenericLinkButton";
import { MdSportsSoccer } from "react-icons/md";



const Page = () => {


  return (
    <>
      <div className="container mx-auto py-5">
        <GenericHeaderModule text="Torneos y Copas" />
        <div id="actionsButtons" className="flex justify-center gap-4">
          <GenericLinkButton text="Nueva Competencia" url="torneos/nuevaCompetencia" icon={<MdSportsSoccer />}/>
          <GenericLinkButton text="Recordatorio de partido" url="torneos/recordatorioPartido" icon={<MdSportsSoccer />}/>
      </div>
    </div>
    </>
  );
}

export default Page;