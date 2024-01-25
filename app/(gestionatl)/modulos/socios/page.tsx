import { columnasSocios, columns } from "@/app/(gestionatl)/ui/lists/tablasocios/columns-socios"
import { DataTable } from "@/app/(gestionatl)/ui/lists/tablasocios/data-table"
import { fetchSocios } from "@/app/lib/crud/sociolist"

export default async function DemoPage() {
  const data = await fetchSocios()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}



/*import ListaSocios from "../../ui/lists/socioslist";

export default function Page () {
    return (
        
        
        //<ListaSocios />
    )
} */