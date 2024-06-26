'use client'
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { socio } from "@prisma/client";
import { FolderInput } from "lucide-react";

const columnasSocios: ColumnDef<socio>[] = [
    // Columna Foto
    {
        accessorKey: "urlSocioPhoto",
        header: () => <div className="text-left">Foto</div>,
        cell: ({ row }) => {
            let urlSocioPhoto: string | undefined = row.getValue('urlSocioPhoto') as string;
            const id = row.original.id
            if (typeof urlSocioPhoto !== 'string') {
                urlSocioPhoto = undefined;
            }

            return (
                <Link href={`/modulos/socios/${id}`}>
                    <Avatar className=" size-10 md:size-14 ">
                        <AvatarImage className=" border-2 md:border-4 hover:border-sky-900  rounded-full " src={urlSocioPhoto} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>)
        }
    },
    //Columna ID
    {
        accessorKey: "id",
        cell: ({ row }) => {
            const id: string = row.getValue('id')
            return (
                <>{id}</>
            )
        }
    },
    //Columna Nombre
    {
        accessorKey: "firstName",
        header: "Socio",
        cell: ({ row }) => {
            const firstName: string = row.getValue('firstName')
            const lastName = row.original.lastName
            const secondLastName = row.original.secondLastName
            const id = row.original.id

            return (
                <Link href={`/modulos/socios/${id}`}>
                    <div className="flex flex-col text-black text-sm md:text-2xl">
                        <div className="md:font-medium hover:text-blue-900 hover:underline">{firstName} {lastName} {secondLastName}</div>
                        <div className="text-m text-gray-500">ID: {row.original.id}</div>
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
                (status === 'Activo') ?
                    <div className="text-green-500 font-bold text-xl">{status}</div>
                    : <div className="text-red-500 font-bold text-xl">{status}</div>

            )
        },
    },
    //Columna Boton Expediente
    {
        id: "expediente",
        header: () => <div className="text-right">Expediente</div>,
        cell: ({ row }) => {
            const id = row.original.id

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
                            onClick={() => navigator.clipboard.writeText(payment.id)}
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
 export default columnasSocios;