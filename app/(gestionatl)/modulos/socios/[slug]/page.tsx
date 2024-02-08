import ExpedienteSocios from "@/app/(gestionatl)/ui/expediente-socio"
import FormularioFamiliar from "@/app/(gestionatl)/ui/formulario-familiares";

export default function Page({ params }: { params: { slug: string } }) {
  const idDelSocio = params.slug; // Obtén el id del cliente desde los parámetros de la página
  
  return (
    <div className="text-black">
      <ExpedienteSocios id={idDelSocio} />
      <FormularioFamiliar socioId={idDelSocio} />
    </div>
  );
}