import React from "react";
import Image from "next/image";

const WebSponsors: React.FC = () => {
  return (
    <>
    <div className=" bg-slate-600 pt-6 text-center font-bold text-white">
        <span>ALIANZAS</span>
        <div id="premium" className="py-6">
        <Image src="/dgd.svg" width={70} height={70} alt="Logotipo Direccion General de Deportes UANL"/><span></span>
        <Image src="/uanl.svg" width={70} height={70} alt="Logotipo Direccion General de Deportes UANL"/><span></span>
        </div>
        <div id="secondary" className="bg-slate-900 py-6">
            <span>FUTBOL LINARES</span>
            <span className="ml-8">VIVA JALISCO</span>
        </div>
    </div>
    </>
  );
};
export default WebSponsors; 