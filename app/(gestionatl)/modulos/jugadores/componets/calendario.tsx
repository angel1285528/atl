"use client"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import ErrorMessage from "@/app/(gestionatl)/ui/forms-fields/errorComponent"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Calendario: React.FC = () => {
const {
  register,
  formState: { errors },
} = useFormContext();

  const [date, setDate] = React.useState<Date>()
  const fecha = date?.toISOString()
  console.log(fecha)

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Selecciona una Fecha</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            />
        </PopoverContent>
      </Popover>
      <input
      {...register("fechaNacimiento")} 
      type="text"
       value={fecha} 
       readOnly />
    </>
  )
}

export default Calendario;
