'use client'
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { JornadaEntrenamiento } from "@prisma/client";




export const columnasJornadas: ColumnDef<JornadaEntrenamiento> [] = [
    {
        accessorKey: "idJornadaEntrenamiento",
        header: "Id",
        cell: ({ row }) => {
            const idJornadaEntrenamiento: string = row.getValue('idJornadaEntrenamiento')
            return (
                <div className="text-left">
                    {idJornadaEntrenamiento}
                </div>
            )
        }
    },
    {
        accessorKey: "fechaJornadaEntrenamiento",
        header: "Fecha",
        cell: ({ row }) => {
            const fechaJornadaEntrenamiento: Date = row.getValue('fechaJornadaEntrenamiento')
            const fecha: string = fechaJornadaEntrenamiento?.toLocaleDateString('es-MX');
            console.log(fecha)
            return (
                <div className="text-left text-black">
                    {fecha}
                </div>
            )
        }

    },
     {
        accessorKey: "horaInicioJornada",
        header: "Hora Inicio",
        cell: ({ row }) => {
            const horaInicioJornada: Date = row.getValue('horaInicioJornada')
            const hora: string = horaInicioJornada?.toLocaleTimeString('es-MX');
            console.log(hora)
            return (
                <div className="text-left text-black">
                    {hora}
                </div>
            )
        }

    },
    {
        accessorKey: "horaFinJornada",
        header: "Hora Fin",
        cell: ({ row }) => {
            const horaFinJornada: Date = row.getValue('horaFinJornada')
            const horaFin: string = horaFinJornada?.toLocaleTimeString('es-MX');
            console.log(horaFin)
            return (
                <div className="text-left text-black">
                    {horaFin}
                </div>
            )
        }

    },
   {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
        const estado: string = row.getValue('estado')
        return (
            <div className="text-left text-black">
                {estado}
            </div>
        )
    }
   },
   {
    accessorKey: "bitacora",
    header: "Reporte",
cell: ({ row }) => {
    return (
        <div className="text-left">
            <Link href={`/entrenamientos/bitacora/${row.original.idJornadaEntrenamiento}`}>
                
                    <Button> Bitacora</Button>
                
            </Link>
        </div>
    )
}
   },
   {
    accessorKey: "Clases",
    header: "Clases",
cell: ({ row }) => {
    return (
        <div className="text-left">
            <Link href={`/entrenamientos/clases/${row.original.idJornadaEntrenamiento}`}>
                
                    <Button> Clases</Button>
                
            </Link>
        </div>
    )
   }
}
]
