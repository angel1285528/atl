// Socios.tsx
import React, { useEffect, useState } from "react";
import { columnasSocios } from "./columns-socios"; // Asumiendo que tienes esto definido en alguna parte
import CardSocios from "./cardSocios"; // Tu componente de tarjeta
import { DataTable } from "./data-table"; // Tu componente de tabla
import { interfaceSocio } from "@/app/lib/interface";

export const Socios = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        // Vista de tarjetas para pantallas pequeñas
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((row, index) => (
            <CardSocios key={index} row={row} />
          ))}
        </div>
      ) : (
        // Utiliza DataTable para pantallas más grandes
        <DataTable columns={columnasSocios} data={data} />
      )}
    </div>
  );
};
