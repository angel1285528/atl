import { columnasSocios, columns } from "@/app/(gestionatl)/ui/lists/tablasocios/columns-socios"
import { DataTable } from "@/app/(gestionatl)/ui/lists/tablasocios/data-table"
import { fetchSocios } from "@/app/lib/crud/sociolist"

export default async function Page() {
  const data = await fetchSocios()

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-extrabold text-center">Relacion de Socios</h1>
      <h2 className="text-2xl  text-center font-extrabold">Academia Tigres Linares</h2>
      <hr className="border-2 mt-2 border-blue-800"/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}



