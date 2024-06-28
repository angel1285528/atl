import React from "react";
import AccionesRapidas from "./AccionesRapidasbtn";
import ActivosTotales from "./dashboard/tarjetasActivos";

const Dashboard: React.FC = () => {
  return (
    <>
      <hr className="border-2 mt-2 border-blue-800 m-2"/>
      <AccionesRapidas />
      <hr className="border-2 mt-2 border-blue-800 m-2"/>
      <ActivosTotales />
    </>
  );
};

export default Dashboard;
