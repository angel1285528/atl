import { Status_Jugador, Cuota } from "@prisma/client";

export interface interfacePlayer {
    playerId: String;
    playerPhoto: string;
    playerFechaRegistro: string;
    playerFirstName: string;
    playerLastName: string;
    playerSecondLastName?: string | null;
    categoria: number;
    playerCurp: string;
    fechaNacimiento: Date;
    cuota: Cuota;
    status: Status_Jugador;
    fingerprint?: string | null;
    socioId: string;
}
   