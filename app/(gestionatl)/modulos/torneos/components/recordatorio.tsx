import React from "react";
import FondoRecordatorio from "./fondoRecordatorio";

const RecordatorioPartido = () => {
  return (
    <div id="recordatorioPartido" className="bg-gray-500 h-[650px] w-[450px] relative overflow-hidden">
      {/* Fondo en posición absoluta para no ocupar espacio */}
      <FondoRecordatorio />

      {/* Contenido encima del fondo */}
      <div className="absolute inset-0 flex flex-col justify-start text-white">
        <p
          className="text-xl text-amber-500 border-blue-700 pt-4 text-right pr-4 font-bold leading-[2]"
        >
          ROL SEMANAL DE JUEGOS
        </p>
        {/* Aquí puedes agregar más contenido */}
      </div>
    </div>
  );
};

export default RecordatorioPartido;
