'use client';
import { deleteJornada, iniciarJornada } from "@/app/lib/crud/crudJornada";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { JornadaEntrenamiento, JornadaClase } from "@prisma/client";
import { useRouter } from 'next/navigation';
import { PlayCircleIcon } from "lucide-react";

type JornadaConClases = JornadaEntrenamiento & {
  clases: (JornadaClase & { clase: { idClase: string } })[];
};

const AccionesCell = ({ row }: { row: any }) => {
  const router = useRouter();
  const estado = row.original.estado;

  const handleEliminar = async () => {
    try {
      await deleteJornada(row.original.idJornadaEntrenamiento);
      router.refresh();
    } catch (error) {
      console.error("Error eliminando sesión:", error);
    }
  };

  return (
    <div className="text-left">
      {estado === "Programada" ? (
        <Button onClick={handleEliminar} className="bg-red-500 text-white">Eliminar Sesión</Button>
      ) : estado === "Desarrollo" ? (
        <p>Finalizar Sesion</p>
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
    <div className="text-left">
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
  // COLUMNA PARA INICIAR JORNADA DE ENTRENAMIENTO
  {
    id: "iniciarJornada",
    header: "Iniciar",
    cell: IniciarJornadaCell,
  },
  // COLUMNA FECHA DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "fechaJornadaEntrenamiento",
    header: "Fecha",
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
    header: "Clases",
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
      );
    },
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
      );
    },
  },
  // COLUMNA ELIMINAR SESION
  {
    id: "acciones",
    header: "Acciones",
    cell: AccionesCell,
  },
];
