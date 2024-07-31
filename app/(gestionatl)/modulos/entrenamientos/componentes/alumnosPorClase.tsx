'use client';
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from "next/image";
import { toast } from 'react-toastify';
import { getAlumnosPorClase } from "@/app/lib/crud/crudClases";
import AsistenciaSwitch from "./AsistenciaSwitch";

type Alumno = {
  playerId: string;
  playerFechaRegistro: Date;
  playerFirstName: string;
  playerLastName: string;
  playerSecondLastName: string | null;
  playerPhotoUrl?: string | null;
  categoria: string;
  asistencia: boolean; // Añade esta propiedad
};

type Clase = {
  idClase: string;
  tipo: string;
  alumnos: Alumno[];
};

type JornadaClase = {
  jornadaId: number;
  claseId: string;
  clase: Clase;
};

type AlumnosPorClaseProps = {
  jornadaId: number;
};

const AlumnosPorClase: React.FC<AlumnosPorClaseProps> = ({ jornadaId }) => {
  const [data, setData] = useState<JornadaClase[]>([]);
  const [loading, setLoading] = useState(true);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const result = await getAlumnosPorClase(jornadaId);
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [jornadaId]);

  const handleAccordionChange = (value: string | null) => {
    setOpenItem(value ?? undefined); // Toggle accordion item
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='w-full md:w-5/6 lg:w-4/6 mx-auto'
        type='single'
        collapsible
        value={openItem}
        onValueChange={(value) => handleAccordionChange(value)}
      >
        {data.map((jornadaClase) => (
          <AccordionItem key={jornadaClase.claseId} value={jornadaClase.claseId}>
            <AccordionTrigger className='flex items-center font-bold text-xl md:text-2xl text-blue-900'>
              <span className='text-2xl md:text-3xl mr-auto text-center'>Grupo: {jornadaClase.clase.idClase}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="my-4">
                <ul className="flex flex-wrap gap-4">
                  {jornadaClase.clase.alumnos.map((alumno) => (
                    <li key={alumno.playerId} className="w-full flex items-center">
                      <div className="w-1/4 md:w-1/6 flex-shrink-0">
                        <Image
                          src={alumno.playerPhotoUrl ?? "/images/avatar.png"}
                          alt={`Foto de ${alumno.playerFirstName}`}
                          width={50}
                          height={50}
                          className="rounded-full ml-4"
                        />
                      </div>
                      <div className="w-2/4 md:w-3/6">
                        <div className="text-xl font-bold sm:inline-block">
                          {alumno.playerFirstName} {alumno.playerLastName}
                        </div>
                        <div className="sm:hidden">{alumno.categoria}</div>
                        <div className="hidden sm:block">{alumno.categoria}</div>
                      </div>
                      <div className="w-1/4 md:w-2/6 flex justify-center">
                        <AsistenciaSwitch
                          jugadorId={alumno.playerId}
                          jornadaId={jornadaClase.jornadaId}
                          claseId={jornadaClase.claseId}
                          initialAsistencia={alumno.asistencia} // Valor inicial de asistencia
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AlumnosPorClase;
