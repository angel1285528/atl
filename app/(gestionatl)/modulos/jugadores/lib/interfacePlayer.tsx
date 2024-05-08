import { Status_Jugador } from "@prisma/client";

export interface interfacePlayer {
    playerId: string; // Cambiado a minúsculas
    playerPhoto: string;
    playerFechaRegistro: string; // Cambiado a DateTime
    playerFirstName: string;
    playerLastName: string;
    playerSecondLastName?: string | null;
    categoria: string; // Cambiado a string
    fechaNacimiento: Date; // Cambiado a DateTime y tipo de datos
    lugarNacimiento: string; // Nuevo campo
    school: string; // Nuevo campo
    schoolarGrade: string; // Nuevo campo
    playerCellPhone: string; // Nuevo campo
    playerEmail: string; // Nuevo campo
    tipoCuota: string; // Nuevo campo
    importeMensualidad: number; // Nuevo campo
    status: Status_Jugador; // Se mantiene igual
    actaDeNacimientoURL?: string | null; // Nuevo campo
    actaDeNacimiento: boolean; // Nuevo campo
    curpUrl?: string | null; // Nuevo campo
    curp: boolean; // Nuevo campo
    identificacionUrl?: string | null; // Nuevo campo
    identificacion: boolean; // Nuevo campo
    socioId: string; // Se mantiene igual
}

   