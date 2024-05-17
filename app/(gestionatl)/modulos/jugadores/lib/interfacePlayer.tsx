import { Status_Jugador, socio, } from "@prisma/client";


export interface interfacePlayer {
    playerId: string;
    playerFirstName: string;
    playerLastName: string;
    playerSecondLastName?: string | null; // Optional string with null allowed
    categoria: string;
    rama: string;
    status: Status_Jugador;
    fechaNacimiento: string;
    playerPhotoUrl?: string | undefined | null;
    playerCellPhone?: string | null | undefined;
    playerEmail: string | null | undefined;
    socioId: string;
    
  }