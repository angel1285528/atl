import React from "react";
import GenericHeaderModule from "@/components/ui/genericModulHeader";
import GenericLinkButton from "../../components/dashboard/GenericLinkButton";
import { MdSportsSoccer } from "react-icons/md";
import  RecordatorioPartido  from "@/app/(gestionatl)/modulos/torneos/components/recordatorio";
const Page = () => {
    return (
        <>
        <div className="container mx-auto py-5 flex flex-col items-center">
            <GenericHeaderModule text="Recordatorio Partido" />
            <RecordatorioPartido />
            
        </div>
        </>
    );
    }

export default Page;