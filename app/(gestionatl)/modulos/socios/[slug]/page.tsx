import ExpedienteSocios from "@/app/(gestionatl)/modulos/socios/componentes/expediente-socio"
import FormularioFamiliar from "@/app/(gestionatl)/ui/formulario-familiares";
import { DataTableFamiliares } from "@/app/(gestionatl)/ui/lists/tablaFamiliares/data-table-familiares";
import { columnsFamiliares } from "@/app/(gestionatl)/ui/lists/tablaFamiliares/columns-familiares";
import { cargarFamiliares } from "@/app/lib/crud/cargarFamiliares";
import FormularioPlayer from "../../jugadores/components/formularioJugador";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataTableJugadoresPorSocio } from "../../jugadores/components/DataTableJugadoresPorSocio";
import { columnasJugadoresSocio } from "../../jugadores/components/columnasJugadoresPorSocio";
import { cargarJugadoresPorSocio } from "../../jugadores/lib/crud/fetchJugadorPorSocio";

export const dynamic = "force-dynamic"

export default async function Page({ params }: { params: { slug: string } }) {

  const idDelSocio = params.slug; // Obtén el id del cliente desde los parámetros de la página
  const data = await cargarFamiliares(params.slug)
  const dataJugadores = await cargarJugadoresPorSocio(params.slug)

  return (
    <div className="text-black w-11/12 mx-auto mt-5">
      <hr className="border-4 border-blue-800 mt-4" />
      <h1 className="text-center font-extrabold text-4xl">Expediente Socio</h1>
      <hr className="border-4 border-blue-800 mt-4" />
      <ExpedienteSocios id={idDelSocio} />
      <div id="tablasSocio" className="md:flex md:justify-between">
        <div id="tablaJugadoresDelSocio" className="md:w-1/2 p-2">
          <h3 className="text-center font-extrabold text-xl">Jugadores Registrados</h3>
          <DataTableJugadoresPorSocio columns={columnasJugadoresSocio} data={dataJugadores || []} />
        </div>
        <div id="tablaFamiliaresDelSocio" className="md:w-1/2 p-2">
          <h3 className="text-center font-extrabold text-xl">Familiares Adicionales</h3>
          <DataTableFamiliares columns={columnsFamiliares} data={data || []} />
        </div>
      </div>
 
      <div id="formularioJugador" //hidden
      >
      <FormularioPlayer socioId={idDelSocio} />
      </div>
      <div id="formularioFamiliar"className="" >
        <FormularioFamiliar socioId={idDelSocio} />
      <ToastContainer />
      </div>
    </div>
  );
}