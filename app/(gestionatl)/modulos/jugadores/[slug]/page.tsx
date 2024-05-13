import React from "react";

    export default async function Page({ params }: {params: { slug:string }}){
        
        const playerId = params.slug;
        return (
            <div className="text-black w-11/12 mx-auto mt-5">
            <hr className="border-4 border-blue-800 mt-4"/>
            <h1 className="text-center font-extrabold text-4xl">Expediente Jugador</h1>
            <hr className="border-4 border-blue-800 mt-4"/>
            {/* <ExpedienteSocios playerId={playerId} /> */}
            <hr className="border-4 border-blue-800 mt-4"/>
            </div>
        )
    }
