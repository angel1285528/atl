import React from "react";
import Image from "next/image";
import { CarouselDemo } from "./carrouselSecondarySponsors";
const premiumSponsors = [
  { name: "Direccion General de Deportes UANL", imageUrl: "/dgd.svg", description: "Logotipo Direccion General de Deportes UANL" },
  { name: "Tigres Blanco", imageUrl: "/tigreswhite.svg", description: "Logotipo Tigres Blanco" },
  { name: "UANL", imageUrl: "/uanl.svg", description: "Logotipo UANL" },
  // Add more premium sponsors here
];

const secondarySponsors = [
  { name: "FUTBOL LINARES", imageUrl: null, description: "FUTBOL LINARES" },
  { name: "VIVA JALISCO", imageUrl: null, description: "VIVA JALISCO" },
  // Add more secondary sponsors here
];

const WebSponsors: React.FC = () => {
  return (
    <div className="bg-slate-600 pt-6 text-center font-bold text-white">
      <div id="Title">
        <span className="font-bold text-xl">A L I A N Z A S</span>
      </div>
      <div id="premium" className="py-6 flex justify-center space-x-12">
        {premiumSponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center w-24 h-24 md:w-36 md:h-36">
            {sponsor.imageUrl ? (
              <Image src={sponsor.imageUrl} width={100} height={100} alt={sponsor.description} className="object-contain" />
            ) : (
              <span className="text-center">{sponsor.name}</span>
            )}
          </div>
        ))}
      </div>
      <div id="secondary" className="bg-slate-900 py-6 flex justify-center space-x-12">
      <CarouselDemo />
      </div>
    </div>
  );
};

export default WebSponsors;
