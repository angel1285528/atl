"use client"
import React, { useEffect, useState } from 'react';
import Dashboard from './components/dashboard';
import { JugadoresTotales } from "./jugadores/lib/crud/playerslist";

export const dynamic = "force-dynamic"

const Page: React.FC = () => {
    const [totalJugadores, setTotalJugadores] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await JugadoresTotales();
            setTotalJugadores(data);
        }
        fetchData();
    }, []);

    return (
        <>
        <header className='m-4'>
            <h1 className='text-center text-6xl font-extrabold text-blue-800'>Dashboard ATL</h1>
        </header>
     
            {/* <Modulos /> */}
            <Dashboard />
            <div>
                {totalJugadores !== null ? (
                    <p>Total de Jugadores: {totalJugadores}</p>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </>
    );
}

export default Page;
