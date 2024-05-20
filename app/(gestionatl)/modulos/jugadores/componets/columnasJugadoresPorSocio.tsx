"use client"
import Link from "next/link"
import { interfacePlayer } from "../lib/interfacePlayer";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, FolderInput, Link as link } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type columnasJugadoresPorSocio = {
    playerPhotoUrl: string
    }

export const columnasJugadoresSocio: ColumnDef<interfacePlayer>[] = [
    // Columna Foto
    {
        accessorKey: "playerPhotoUrl",
        header: () => <div className="text-left"></div>,
        cell: ({ row }) => {
            let playerPhotoUrl: string | undefined = row.getValue('playerPhotoUrl') as string; // Cambia const por let aquí
            const id = row.original.playerId
            if (typeof playerPhotoUrl !== 'string') {
                playerPhotoUrl = undefined; // Asigna un nuevo valor aquí
            }

            return (
                <Link href={`/modulos/socios/${id}`}>
                    <Avatar className=" size-10 md:size-14 ">
                        <AvatarImage className=" border-2 md:border-4 hover:border-sky-900  rounded-full " src={playerPhotoUrl} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>)
        }
    },
    //Columna Nombre
    {

        accessorKey: "playerFirstName", //Modificar para que aparezc el nombre del socio con el apellido
        header: "",
        cell: ({ row }) => {
            const firstName: string = row.getValue('playerFirstName')
            const lastName = row.original.playerLastName
            const secondLastName = row.original.playerSecondLastName
            const id = row.original.playerId
            const categoria = row.original.categoria
            const status = row.original.status
            return (
                <Link href={`/modulos/jugadores/${id}`}>
                    <div className="flex flex-col text-black text-sm md:text-2xl">
                        <div className="md:font-medium hover:text-blue-900 hover:underline">{firstName} {lastName} {secondLastName}</div>
                        <div className="text-m text-gray-500"> {row.original.playerId}</div>
                        <div className="text-m text-gray-500"><span>{row.original.categoria}</span></div>
                        
                    </div>
                </Link>
            )
        },
    },
    //Columna categoría
    
    //Columna Boton Expediente

   
]
