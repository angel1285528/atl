import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import ReactDatePicker from "react-datepicker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "react-datepicker/dist/react-datepicker.css";

const Calendario: React.FC = () => {
  const { control, setValue } = useFormContext();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleSelect = (date: Date) => {
    setValue("fechaNacimiento", date);
    setIsPopoverOpen(false); // Cerrar el popover al seleccionar una fecha
  };

  return (
    <FormField
      control={control}
      name="fechaNacimiento"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500",
                    !field.value && "text-muted-foreground"
                  )}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  {field.value ? (
                    format(field.value, "PPP", { locale: es })
                  ) : (
                    <span>Selecciona o escribe una fecha</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              align="start"
              style={{ backgroundColor: "white" }}
            >
              <ReactDatePicker
                selected={field.value}
                onChange={handleSelect}
                locale={es}
                dateFormat="PPP"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
                minDate={new Date("1900-01-01")}
                inline
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Calendario;
