'use client'
import React, {useState, useEffect} from "react";
import { JugadoresTotales } from "../../jugadores/lib/crud/playerslist";
import { anton } from "@/app/ui/fonts";

interface Props {
    text: string;
    data?: React.ReactNode | null;
    borderColor: string;
    bgColor: string;
}

const GenericCardInfo:React.FC<Props> = ({text, data, borderColor, bgColor}) => {


return (
    <div className={`${anton} ${bgColor} rounded-xl ${borderColor} border-l-8 m-4 w-40`} >
        {data !== null ? (
            <>
            <p className="text-6xl text-yellow-400 font-extrabold text-center" >{data}</p>
            <p className="pl-3 text-center text-gray-400 font-bold font-amber-500">{text}</p>
            </>
        ) : (
            <p>Cargando...</p>
        )}
    </div>
);


}

export default GenericCardInfo;