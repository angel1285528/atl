// components/PlayerList.tsx
import React from 'react';
import Image from 'next/image';

type Player = {
    playerId: string;
    playerFirstName: string;
    playerLastName: string;
    playerPhotoUrl: string | null;
    categoria: string;
};

type PlayerListProps = {
    players: Player[];
};

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
    if (players.length === 0) {
        return <div>No hay jugadores activos en esta categoría.</div>;
    }

    return (
        <div className="grid w-full gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
            {players.map((player) => (
                <div key={player.playerId} className="flex flex-col items-center">
                    {player.playerPhotoUrl ? (
                        <Image
                            src={player.playerPhotoUrl}
                            alt={`${player.playerFirstName} ${player.playerLastName}`}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    ) : (
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                            No Image
                        </div>
                    )}
                    <div className="text-center">
                        <p>{player.playerFirstName} {player.playerLastName.charAt(0)}.</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlayerList;
