'use client';
import { deleteJornada, iniciarJornada } from "@/app/lib/crud/crudJornada";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { JornadaEntrenamiento, JornadaClase } from "@prisma/client";
import { useRouter } from 'next/navigation';


type JornadaConClases = JornadaEntrenamiento & {
  clases: (JornadaClase & { clase: { idClase: string } })[];
};

const AccionesCell = ({ row }: { row: any }) => {
  const router = useRouter();
  
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
      <Button onClick={handleEliminar} className="bg-red-500 text-white">Eliminar Sesión</Button>
    </div>
  );
};

const IniciarJornadaCell = ({ row }: { row: any }) => {
  const router = useRouter();

  const handleIniciarJornada = async () => {
    try {
      await iniciarJornada(row.original.idJornadaEntrenamiento);
      router.push(`/modulos/entrenamientos/currentSesion/${row.original.idJornadaEntrenamiento}`);
    } catch (error) {
      console.error("Error iniciando la jornada:", error);
    }
  };

  return (
    <div className="text-left">
      <Button onClick={handleIniciarJornada} className="bg-blue-500 text-white">Iniciar Jornada</Button>
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
  // COLUMNA ID DE JORNADA DE ENTRENAMIENTO
 
  // COLUMNA FECHA DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "fechaJornadaEntrenamiento",
    header: "Fecha",
    cell: ({ row }) => {
      const fechaJornadaEntrenamiento: Date = row.getValue('fechaJornadaEntrenamiento');
      const horaInicio = row.original.horaInicioJornada
      const horaFin = row.original.horaFinJornada
      const horalocal: string | undefined = horaFin?.toLocaleTimeString ('es-Mx',{
        hour: 'numeric',
        minute: 'numeric'
      })
      const Fin: string | undefined = horaFin?.toLocaleTimeString('es-Es',{
        hour: 'numeric',
        minute: 'numeric',

      })
      const Inicio: string | undefined = horaInicio?.toLocaleTimeString('es-Es', {
        hour: "numeric",
        minute: 'numeric'
      })
      const fecha: string = fechaJornadaEntrenamiento?.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
      return (
        <div className="text-left text-black">
          {fecha} <br />
          <p>Inicia:</p>{Inicio} <br />
          {Fin}{horalocal}
        </div>
      );
    },
  },
  // COLUMNA HORARIOS DE JORNADA DE ENTRENAMIENTO

  // COLUMNA CLASES DE JORNADA DE ENTRENAMIENTO
  {
    accessorKey: "clases",
    header: "Clases",
    cell: ({ row }) => {
      const clases = row.original.clases as JornadaClase[];
      return (
        <div className="text-left">
          {clases.map((jornadaClase) => (
            <p key={jornadaClase.claseId}>{jornadaClase.claseId}</p>
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
