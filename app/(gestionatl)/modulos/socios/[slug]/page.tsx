
import ExpedienteSocios from "@/app/(gestionatl)/modulos/socios/componentes/expediente-socio"
import FormularioFamiliar from "@/app/(gestionatl)/ui/formulario-familiares";
import { DataTableFamiliares } from "@/app/(gestionatl)/ui/lists/tablaFamiliares/data-table-familiares";
import { columnsFamiliares } from "@/app/(gestionatl)/ui/lists/tablaFamiliares/columns-familiares";
import { cargarFamiliares } from "@/app/lib/crud/cargarFamiliares";
import FormularioPlayer from "../../jugadores/componets/formularioJugador";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataTableJugadoresPorSocio } from "../../jugadores/componets/DataTableJugadoresPorSocio";
import { columnasJugadoresSocio } from "../../jugadores/componets/columnasJugadoresPorSocio";
import { cargarJugadoresPorSocio } from "../../jugadores/lib/crud/fetchJugadorPorSocio";

export default async function Page({ params }: { params: { slug: string } }) {

   const idDelSocio = params.slug; // Obtén el id del cliente desde los parámetros de la página
  const data = await cargarFamiliares(params.slug)
  const dataJugadores = await cargarJugadoresPorSocio(params.slug)
  
  return (
    <div className="text-black w-11/12 mx-auto mt-5">
      <hr className="border-4 border-blue-800 mt-4"/>
      <h1 className="text-center font-extrabold text-4xl">Expediente Socio</h1>
      <hr className="border-4 border-blue-800 mt-4"/>
      <ExpedienteSocios id={idDelSocio} />
      <hr className="border-4 border-blue-800 mt-4"/>
      <h3 className="text-center font-extrabold text-xl">Jugadores Registrados</h3>
      <hr className="border-4 border-blue-800 mt-4"/>
      <DataTableJugadoresPorSocio columns={ columnasJugadoresSocio } data={dataJugadores || []} />
      <hr className="border-4 border-blue-800 mt-4"/>
      <h3 className="text-center font-extrabold text-xl">Familiares Adicionales</h3>
      <hr className="border-4 border-blue-800 mt-4"/>
      <DataTableFamiliares columns={ columnsFamiliares } data={data || []}/>
      <FormularioFamiliar socioId={idDelSocio}  />
      <ToastContainer />
      <FormularioPlayer socioId={idDelSocio} />
      {/* <ToastContainer /> */}
    </div>
  );
}