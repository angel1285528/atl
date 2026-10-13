import React from 'react';
import PlayerCard from './playerCard';

type Player = {
    playerId: string;
    playerFirstName: string;
    playerLastName: string;
    playerPhotoUrl: string | null;
    categoria: string;
    rama: string;
};

type PlayerListProps = {
    players: Player[];
};

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
    if (players.length === 0) {
        return <div className="text-white">No hay jugadores activos en esta categoría.</div>;
    }

    return (
        <div className="grid w-full gap-6 p-4 md:grid-cols-3 lg:grid-cols-4">
            {players.map((player) => (
                <div key={player.playerId} className="relative h-80 mx-4">
                    <PlayerCard player={player} />
                </div>
            ))}
        </div>
    );
};

export default PlayerList;
