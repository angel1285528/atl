import React from 'react';
import { columns } from './components/playerColums';
import PlayerDataTable from './components/PlayerDataTable';

import { fetchPlayer } from './lib/crud/playerslist';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetchPlayer()
    return (
        <div className="container mx-auto py-5">
        <h1 className="text-2xl font-extrabold text-center">Relacion de Jugadores</h1>
        <h2 className="text-2xl  text-center font-extrabold">Academia Tigres Linares</h2>
        <hr className="border-2 mt-2 border-blue-800"/>
        <PlayerDataTable columns={columns} data={data} />
      </div>
  
    );
}