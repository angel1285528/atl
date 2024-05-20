import { Status_Jugador, socio, } from "@prisma/client";


export interface interfacePlayer {
    playerId: string;
    playerFirstName: string;
    playerLastName: string;
    playerSecondLastName?: string | null; // Optional string with null allowed
    categoria: string;
    rama: string;
    status: Status_Jugador;
    fechaNacimiento: Date;
    playerPhotoUrl?: string | undefined | null;
    playerCellPhone?: string | null | undefined;
    playerEmail: string | null | undefined;
    paisNacimiento: string;
    estadoNacimiento: string;
    ciudadNacimiento: string;
    schoolarGrade: string;
    schoolarLevel: string;
    school: string;
    
    socioId: string;
    
  }