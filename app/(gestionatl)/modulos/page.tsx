"use client"
import React, { useEffect, useState } from 'react';
import Dashboard from './components/dashboard';
import { JugadoresTotales } from "./jugadores/lib/crud/playerslist";
import { SociosTotales } from '@/app/lib/crud/sociolist';
import { totalmem } from 'os';

export const dynamic = 'force-dynamic';


const   Page: React.FC = () => {
    
    const [totalSocios, setTotalSocios] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await SociosTotales();
            setTotalSocios(data);
        }
        fetchData();
    }, /* Add closing parenthesis here */);
    return (
        <>
        <header className='m-4'>
            <h1 className='text-center text-2xl md:text-6xl font-extrabold text-blue-800'>Dashboard ATL</h1>
        </header>
     
            

            
        </>
    );
}

export default Page;
