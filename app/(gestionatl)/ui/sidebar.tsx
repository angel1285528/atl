'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdMenuOpen } from "react-icons/md";

const Modulos = [
    {
        Link: "/modulos/",
        name: "Inicio",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/socios/",
        name: "Socios",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/jugadores",
        name: "Jugadores",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/entrenamientos",
        name: "Entrenamientos",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/gruposEntrenamiento",
        name: "Grupos de Entrenamiento",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/torneos",
        name: "Torneos y Copas",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/entrenadores",
        name: "Entrenadores",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/comite",
        name: "Comite Padres de Familia",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/festejos",
        name: "Festejos",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/temporadas",
        name: "Temporadas",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    },
    {
        Link: "/modulos/Usuarios",
        name: "Gestión de Usuarios",
        icon: "",
        opciones: {},
        Disponibilidad: true,
    }
];

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div id="sideBar" className="md:basis-1/5 w-full">
                <div id="sideBarTop" className="hidden md:flex md:flex-col justify-center items-center border-b-4 border-blue-800 md:scale-75 lg:scale-100 xl:scale-100">
                    <Link href="/modulos">
                        <Image src="/logo-academia.svg" width={120} height={120} alt="Logotipo Academia Tigres" className="object-center size-24 md:size-40 " />
                        <div>
                            <span>
                                <h1 className=" font-bold text-xl">Sistema de Gestión</h1>
                            </span>
                            <span>
                                <h2 className=" font-bold text-xl">Academia Tigres Linares</h2>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="md:hidden text-white text-xl text-center flex justify-between p-4 bg-blue-800">
                    <Link href="/modulos">
                        <span>
                            <Image src="/logo-academia.svg" width={60} height={60} alt="Logotipo Academia Tigres" className="object-center " />
                        </span>
                        <span>
                            Sistema de Gestión <br />
                            Academia Tigres Linares
                        </span>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MdMenuOpen size="35px" style={{ color: 'white' }} />
                    </button>
                </div>
                <div id="sideBarMain" className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul>
                        {Modulos.map((accion, index) => (
                            <Link key={index} href={accion.Link}>
                                <li onClick={handleLinkClick} className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2">
                                    <span>{accion.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
