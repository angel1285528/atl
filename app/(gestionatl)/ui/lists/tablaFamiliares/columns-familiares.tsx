"use client"

import { ColumnDef } from "@tanstack/react-table"
import { familiares } from "@prisma/client"
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


 
export const columnsFamiliares: ColumnDef<familiares>[] = [
  {
    accessorKey: "familyFirstName",
    header: "Nombre del Familiar",
    cell: ({ row }) => {
        const familyFirstName: string = row.getValue('familyFirstName')
        const familyLastName = row.original.familyLastName
        const familySecondLastName = row.original.familySecondLastName  
        const familyRelationship= row.original.familyRelationship
        const familyPhoneNumber = row.original.familyPhoneNumber

        return(
            <div className="flex flex-col text-black text-2xl">
            <div className="font-medium">{familyFirstName} {familyLastName} {familySecondLastName}</div>
            <div className="font-medium">Parentesco: {familyRelationship}   Celular:{familyPhoneNumber} </div>
            
            
        </div>
        )
  },
},

 
]