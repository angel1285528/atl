'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MdMenuOpen } from "react-icons/md";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div id="sideBar" className="md:basis-1/5 w-full">

                <div id="sideBarTop" className="hidden md:flex md:flex-col justify-center items-center border-b-4 border-blue-800 md:scale-75 lg:scale-100 xl:scale-100">
                    <Image src="/logo-academia.svg" width={120} height={120} alt="Logotipo Academia Tigres" className="object-center size-24 md:size-40 " />
                    <div>
                    <span>
                    <h1 className=" font-bold text-xl">Sistema de Gestión</h1>
                    </span>
                    <span>
                    <h2 className=" font-bold text-xl">Academia Tigres Linares</h2>
                    </span>
                    </div>
                </div>
                <div className="md:hidden text-white text-xl text-center flex justify-between p-4 bg-blue-800">
                    <span>  
                    <Image src="/logo-academia.svg" width={60} height={60} alt="Logotipo Academia Tigres" className="object-center " />
                    </span>
                    <span>
                    Sistema de Gestión <br />
                    Academia Tigres Linares
                    </span>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MdMenuOpen size="35px" style={{ color: 'white' }} />
                    </button>
                </div>
                <div id="sideBarMain" className={`${isOpen ? 'block' : 'hidden'} md:block`}>


                    <ul>
                        <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Inicio</span></li>
                        <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Socios</span></li>
                        <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Jugadores</span></li>
                        <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Entrenadores</span></li>
                        <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Grupos</span></li>
                        <li className="text-black pl-5 text-xl py-3 border-b-3 border-white border-y-2"><span></span><span>Equipos</span></li>
                    </ul>

                </div>
            </div>
        </>
    );
}