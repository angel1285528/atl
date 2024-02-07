import ExpedienteSocios from "@/app/(gestionatl)/ui/expediente-socio"


export default function Page({ params }: { params: { slug: string } }) {
  const idDelCliente = params.slug; // Obtén el id del cliente desde los parámetros de la página

  return (
    <div className="text-black">
      <ExpedienteSocios id={idDelCliente} />
    </div>
  );
}