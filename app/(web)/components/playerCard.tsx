import React from 'react';

type Player = {
    playerId: string;
    playerFirstName: string;
    playerLastName: string;
    playerPhotoUrl: string | null;
    categoria: string;
    rama: string;
};

type PlayerCardProps = {
    player: Player;
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
    const backgroundImage = player.rama === 'Varonil' ? '/boyPlayerCard.svg' : '/girlPlayerCard.svg';

    return (
        <div className="relative flex flex-col items-center p-4 h-full w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center justify-end h-full w-full">
                <div className="text-center text-2xl text-white font-extrabold drop-shadow-md">
                    <p>{player.playerFirstName} {player.playerLastName.charAt(0)}.</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
