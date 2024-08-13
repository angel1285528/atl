'use client';
import { deleteJornada, iniciarJornada, cancelarJornada } from "@/app/lib/crud/crudJornada";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { JornadaEntrenamiento, JornadaClase } from "@prisma/client";
import { useRouter } from 'next/navigation';
import { PlayCircleIcon } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import FinalizarEntrenamientoButton from "./finalizarEntenamientoButton";

type JornadaConClases = JornadaEntrenamiento & {
  clases: (JornadaClase & { clase: { idClase: string } })[];
};

const AccionesCell = ({ row }: { row: any }) => {
  const router = useRouter();
  const estado = row.original.estado;
 const idJornadaEntrenamiento = row.original.idJornadaEntrenamiento;
  const handleCancelarSesion = async () => {
    try{
      await cancelarJornada(row.original.idJornadaEntrenamiento);
      router.refresh();
    } catch (error) {
      console.error("Error cancelando sesión:", error);
    }
  }

  const handleEliminar = async () => {
    try {
      await deleteJornada(row.original.idJornadaEntrenamiento);
      router.refresh();
    } catch (error) {
      console.error("Error eliminando sesión:", error);
    }
  };

  return (
    <div className="text-center">
      {estado === "Programada" ? (
        <>
        <div className="flex flex-col space-y-3">
        <Button onClick={handleEliminar} className="bg-black text-white font-extrabold text-xl">Cancelar Sesión</Button>
        <Button onClick={handleEliminar} className="bg-red-500 text-white">Eliminar Sesión</Button>
        </div>
        </>
      ) : estado === "Desarrollo" ? (
        <FinalizarEntrenamientoButton idJornadaEntrenamiento={idJornadaEntrenamiento} />
      ) : (
        <p>Bitacora</p>
      )}
    </div>
  );
};

const IniciarJornadaCell = ({ row }: { row: any }) => {
  const router = useRouter();
  const estado = row.original.estado;

  const handleIniciarJornada = async () => {
    try {
      const result = await iniciarJornada(row.original.idJornadaEntrenamiento);
      if (result) {
        router.push(`/modulos/entrenamientos/currentSesion/${row.original.idJornadaEntrenamiento}`);
      }
    } catch (error) {
      console.error("Error iniciando la jornada:", error);
    }
  };

  const verJornada = async () => {
    router.push(`/modulos/entrenamientos/currentSesion/${row.original.idJornadaEntrenamiento}`);
  };

  return (
    <div className="text-center">
      {estado === "Programada" ? (
        <Button onClick={handleIniciarJornada} className="bg-blue-500 text-white">
          <PlayCircleIcon />
        </Button>
      ) : estado === "Desarrollo" ? (
        <Button onClick={verJornada}>Ver Jornada</Button>
      ) : (
        <p>Bitacora</p>
      )}
    </div>
  );
};

export const columnasJornadas: ColumnDef<JornadaConClases>[] = [
  // COLUMNA ESTADO DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "estado",
    header: () => <div className="text-center">Estado</div>,
    cell: ({ row }) => {
      const estado: string = row.getValue('estado');
      return (
        <div className="text-center text-black">
          {estado}
        </div>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    enableColumnFilter: true,
  },
  // COLUMNA PARA INICIAR O VER JORNADA DE ENTRENAMIENTO
  {
    id: "iniciarJornada",
    header: () => <div className="text-center">Acciones</div>,
    cell: IniciarJornadaCell,
  },
  // COLUMNA FECHA DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "fechaJornadaEntrenamiento",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const fechaJornadaEntrenamiento: Date = row.getValue('fechaJornadaEntrenamiento');
      const horaInicio = row.original.horaInicioJornada;
      const horaFin = row.original.horaFinJornada;
     
      const fecha: string = fechaJornadaEntrenamiento?.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
      return (
        <div className="text-left text-black">
          {fecha} <br />
          <p>Horario: {horaInicio} - {horaFin}</p>
        </div>
      );
    },
  },
  // COLUMNA CLASES DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "clases",
    header: () => <div className="text-left">Clases</div>,
    cell: ({ row }) => {
      const clases = row.original.clases as JornadaClase[];
      const rows = [];
      for (let i = 0; i < clases.length; i += 4) {
        rows.push(clases.slice(i, i + 4));
      }
      return (
        <div className="text-left">
          {rows.map((claseRow, rowIndex) => (
            <div key={rowIndex}>
              {claseRow.map((jornadaClase) => (
                <span key={jornadaClase.claseId} className="mr-2">{jornadaClase.claseId}</span>
              ))}
            </div>
          ))}
        </div>
      );
    },
  },
 
  // COLUMNA ELIMINAR SESION
  {
    id: "acciones",
    header: () => <div className="text-center">Acciones</div>,
    cell: AccionesCell,
  },
];

