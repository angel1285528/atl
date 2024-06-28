'use server'
import prisma from '@/app/lib/prisma';
import AlumnosPorClase from '../../componentes/alumnosPorClase';
import ContadorAsistencia from '../../componentes/contadorAsistencia';

type JornadaConClases = {
  idJornadaEntrenamiento: number;
  fechaJornadaEntrenamiento: Date;
  estado: string;
  clases: {
    idClase: string;
    tipo: string;
    alumnos: {
      playerId: string;
      playerFirstName: string;
      playerLastName: string;
      playerSecondLastName?: string;
      playerPhotoUrl?: string;
    }[];
  }[];
};

const fetchJornada = async (id: number): Promise<JornadaConClases | null> => {
  const jornada = await prisma.jornadaEntrenamiento.findUnique({
    where: { idJornadaEntrenamiento: id },
    include: {
      clases: {
        include: {
          clase: {
            include: {
              alumnos: {
                where: {
                  Asistencias: {
                    some: {
                      asistencia: false,
                      partidoProgramado: false,
                    },
                  },
                },
                select: {
                  playerId: true,
                  playerFirstName: true,
                  playerLastName: true,
                  playerSecondLastName: true,
                  playerPhotoUrl: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!jornada) return null;

  return {
    idJornadaEntrenamiento: jornada.idJornadaEntrenamiento,
    fechaJornadaEntrenamiento: jornada.fechaJornadaEntrenamiento,
    estado: jornada.estado,
    clases: jornada.clases.map((jc) => ({
      idClase: jc.clase.idClase,
      tipo: jc.clase.tipo as string,
      alumnos: jc.clase.alumnos.map((alumno) => ({
        playerId: alumno.playerId,
        playerFirstName: alumno.playerFirstName,
        playerLastName: alumno.playerLastName,
        playerSecondLastName: alumno.playerSecondLastName ?? undefined,
        playerPhotoUrl: alumno.playerPhotoUrl ?? undefined,
      })),
    })),
  };
};

const CurrentSesionPage = async ({ params }: { params: { id: string } }) => {
  const jornada = await fetchJornada(Number(params.id));

  if (!jornada) {
    return <div>Cargando jornada...</div>;
  }

  return (
    <div className='mx-auto text-center'>
      <h1 className="text-lg font-bold">Jornada de Entrenamiento: {jornada.idJornadaEntrenamiento}</h1>
      <ContadorAsistencia jornadaId={jornada.idJornadaEntrenamiento} />
      <p>{(jornada.fechaJornadaEntrenamiento).toLocaleDateString('es-ES')} </p>
      <h2 className="text-xl font-semibold mt-1">Registro de Asistencia:</h2>
      <div>
        <AlumnosPorClase jornadaId={jornada.idJornadaEntrenamiento} />
      </div>
    </div>
  );
};

export default CurrentSesionPage;
