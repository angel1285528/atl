import React from "react";


const FondoRecordatorio = () => {
    return (
        <>
        {/* Capa negra alineada a la derecha con borde diagonal, degradado y fondo */}
      <div
      id="capaNegra"
      className="h-full w-9/12 ml-auto relative bg-black"
      style={{
          backgroundImage: "url('/main1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "75% center",
          clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        >
      {/* Capa semi-transparente para reducir intensidad de la imagen */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Capa de degradado para transición suave */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
    </div>
        </>     
    )
}

export default FondoRecordatorio;