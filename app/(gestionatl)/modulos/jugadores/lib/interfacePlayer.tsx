import { Status_Jugador, socio, } from "@prisma/client";


export interface interfacePlayer {
    playerId: string;
    playerFirstName: string;
    playerLastName: string;
    playerSecondLastName?: string | null; // Optional string with null allowed
    categoria: string;
    socioId: string;
    
  }