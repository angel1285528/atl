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
        header: () => <div className="text-left">Foto</div>,
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

        accessorKey: "firstName", //Modificar para que aparezc el nombre del socio con el apellido
        header: "Socio",
        cell: ({ row }) => {
            const firstName: string = row.getValue('firstName')
            const lastName = row.original.playerLastName
            const secondLastName = row.original.playerSecondLastName
            const id = row.original.playerId

            return (
                <Link href={`/modulos/socios/${id}`}>
                    <div className="flex flex-col text-black text-sm md:text-2xl">
                        <div className="md:font-medium hover:text-blue-900 hover:underline">{firstName} {lastName} {secondLastName}</div>
                        <div className="text-m text-gray-500">ID: {row.original.playerId}</div>
                    </div>
                </Link>
            )
        },
    },
    //Columna Status
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status

            return (
                // (status === 'Activo') ?
                    <div className="text-green-500 font-bold text-xl">{status}</div>
                    // : <div className="text-red-500 font-bold text-xl">{status}</div>

            )
        },
    },
    //Columna Boton Expediente
    {
        id: "expediente",
        header: () => <div className="text-right">Expediente</div>,
        cell: ({ row }) => {
            const id = row.original.playerId

            return (
                <Button className=" bg-blue-900 text-white text-xl hover:bg-yellow-400 mx-auto">
                    <FolderInput color="#ffffff" /><Link href={`/modulos/socios/${id}`} className="ml-2 "> Expediente</Link>
                </Button>
            )
        }
    },
    //Columna Acciones
    {
        id: "actions",
        header: () => <div className="text-right">Opciones</div>,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.playerId)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
]
