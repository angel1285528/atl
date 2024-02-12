import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function NewPlayerButton() {
    return (
        <Link href="/modulos/jugadores/nuevojugador">
            <Button className=" bg-green-600 hover:bg-blue-900 text-white text-xl font-semibold ml-auto">
                <PlusCircle className="mr-2 h-4 w-4" />
                Nuevo Jugador
            </Button>
        </Link>
    );
}