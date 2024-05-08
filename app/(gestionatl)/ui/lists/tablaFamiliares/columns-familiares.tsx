"use client"
import { eliminarFamiliar } from "@/app/lib/crud/eliminarFamiliar" 
import { ColumnDef } from "@tanstack/react-table"
import { interfaceFamiliares } from "@/app/lib/interfaces/interfaceSocio" 
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


 
export const columnsFamiliares: ColumnDef<interfaceFamiliares>[] = [
  {
    accessorKey: "familyFirstName",
    header: "Nombre del Familiar",
    cell: ({ row }) => {
        const familyFirstName: string = row.getValue('familyFirstName')
        const familyLastName = row.original.familyLastName
        const familySecondLastName = row.original.familySecondLastName  

        return(
            <div className="flex flex-col text-black text-2xl">
            <div className="font-medium">{familyFirstName} {familyLastName} {familySecondLastName}</div>
            
        </div>
        )
  },
},
  {
    accessorKey: "familyPhoneNumber",
    header: "Datos de Contacto",
    cell: ({ row }) => {
        const familyPhoneNumber: string = row.getValue('familyPhoneNumber')
        
       

        return(
            <div className="flex flex-col text-black text-2xl">
            <div className="font-medium">Celular: {familyPhoneNumber}</div>
            
       
        </div>
        )
  },
},
  {
    accessorKey: "familyRelationship",
    header: "Parentezco",
    cell: ({ row }) => {
        const familyRelationship: string = row.getValue('familyRelationship')
        return(
            <div className="flex flex-col text-black text-2xl">
            <div className="font-medium">{familyRelationship}</div>
        </div>
        )
  },
},
{
    id: "actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const familiarId: string = row.original.familyId
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
              Actualizar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => eliminarFamiliar(familiarId)}>
              Eliminar
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]