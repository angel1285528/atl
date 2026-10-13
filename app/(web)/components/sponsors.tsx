'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-marquee-slider";

const premiumSponsors = [
  { name: "Facultad de Organización Deportiva", imageUrl: "/fod.svg", description: "Logotipo Facultad de Organización Deportiva" },
  { name: "Direccion General de Deportes UANL", imageUrl: "/dgd.svg", description: "Logotipo Direccion General de Deportes UANL" },
  { name: "UANL", imageUrl: "/uanl.png", description: "Logotipo UANL" },
  { name: "Tigres Blanco", imageUrl: "/tigresWhite.svg", description: "Logotipo Tigres Blanco" },
  { name: "Academias Tigres", imageUrl: "/academia-blanco.svg", description: "Logotipo Academias Tigres" },
  { name: "Servicios de Formación y Promoción Deportiva", imageUrl: "/sfypd.svg", description: "Logotipo Servicios de Formación y Promoción Deportiva" },
  // Add more premium sponsors here
];

const secondarySponsors = [
  { name: "FUTBOL LINARES", imageUrl: null, description: "FUTBOL LINARES" },
  { name: "VIVA JALISCO", imageUrl: null, description: "VIVA JALISCO" },
  { name: "Jesmely", imageUrl: null, description: "Jesmely Bisuteria" },
  { name: "Narcisos Pastelería", imageUrl: null, description: "Narcisos Pastelería" },
  { name: "R&R Organic Spa", imageUrl: null, description: "" },
  { name: "Kira Boutique", imageUrl: null, description: "" },
  { name: "Vissof", imageUrl: null, description: "" },
  { name: "VivaJalisco", imageUrl: null, description: "" },
  { name: "Restaurant La Dueña", imageUrl: null, description: "" },
  { name: "K Delicia", imageUrl: null, description: "" },
  { name: "Nima Linares", imageUrl: null, description: "" },
  { name: "Comidas Don Marcos", imageUrl: null, description: "" },
  { name: "Avenir DTF", imageUrl: null, description: "" },
  { name: "El Chino Drinks", imageUrl: null, description: "" },
  { name: "Delicias Regionales Cantú ", imageUrl: null, description: "" },
  // { name: "", imageUrl: null, description: "" }, molde para agregar sponsors
  // Add more secondary sponsors here
];

const WebSponsors: React.FC = () => {
  const [velocity, setVelocity] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVelocity(3); // slower speed for small screens
      } else {
        setVelocity(15); // default speed for larger screens
      }
    };

    handleResize(); // Set initial velocity
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-slate-600 pt-6 text-center font-bold text-white">
      <div id="Title">
        <span className="font-bold text-xl">A L I A N Z A S</span>
      </div>
      <div className="py-6">
        <Marquee
          velocity={velocity}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={0}
          onInit={() => {}}
          onFinish={() => {}}
        >
          {premiumSponsors.concat(premiumSponsors).map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center mx-4 w-24 h-24 md:w-36 md:h-36">
              {sponsor.imageUrl ? (
                <Image src={sponsor.imageUrl} width={100} height={100} alt={sponsor.description} className="object-contain" />
              ) : (
                <span className="text-center">{sponsor.name}</span>
              )}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="bg-slate-900 py-6">
        <Marquee
          velocity={velocity}
          direction="rtl"
          scatterRandomly={false}
          resetAfterTries={0}
          onInit={() => {}}
          onFinish={() => {}}
        >
          {secondarySponsors.concat(secondarySponsors).map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center mx-4 w-24 h-24 md:w-36 md:h-36">
              {sponsor.imageUrl ? (
                <Image src={sponsor.imageUrl} width={100} height={100} alt={sponsor.description} className="object-contain" />
              ) : (
                <span className="text-center">{sponsor.name}</span>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default WebSponsors;
