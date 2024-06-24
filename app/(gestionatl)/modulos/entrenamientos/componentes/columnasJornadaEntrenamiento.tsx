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

export const columnasJornadas: ColumnDef<JornadaEntrenamiento>[] = [
  // COLUMNA ID DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "idJornadaEntrenamiento",
    header: "Id",
    cell: ({ row }) => {
      const idJornadaEntrenamiento: number = row.getValue('idJornadaEntrenamiento');
      return (
        <div className="text-left">
          {idJornadaEntrenamiento}
        </div>
      )
    }
  },
  // COLUMNA FECHA DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "fechaJornadaEntrenamiento",
    header: "Fecha",
    cell: ({ row }) => {
      const fechaJornadaEntrenamiento: Date = row.getValue('fechaJornadaEntrenamiento');
      const fecha: string = fechaJornadaEntrenamiento?.toLocaleDateString('es-MX');
      return (
        <div className="text-left text-black">
          {fecha}
        </div>
      )
    }
  },
  // COLUMNA CLASES DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "clases",
    header: "Clases",
    cell: ({ row }) => {
      const clases = row.getValue('clases') as { idClase: string }[];
      return (
        <div className="text-left">
          {clases.map((clase) => (
            <p key={clase.idClase}>{clase.idClase}</p>
          ))}
        </div>
      )
    }
  },
  // COLUMNA ESTADO DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const estado: string = row.getValue('estado');
      return (
        <div className="text-left text-black">
          {estado}
        </div>
      )
    }
  },
  // COLUMNA BITACORA DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "bitacora",
    header: "Reporte",
    cell: ({ row }) => {
      return (
        <div className="text-left">
          <Link href={`/entrenamientos/bitacora/${row.original.idJornadaEntrenamiento}`}>
            <Button>Bitacora</Button>
          </Link>
        </div>
      )
    }
  },
];
