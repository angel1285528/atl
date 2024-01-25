import Image from "next/image"
import { archivo_black } from "@/app/ui/fonts"
import { vollkorn } from "@/app/ui/fonts"

export default function Header() {
    return (
<>
<div id="Header" className="flex  bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700" >
    <div id="logo-tigres" className="flex basis-1/4 justify-center items-center">              
    <Image
    src="/logo-tigres-oficial.png"
    width={70}
    height={100} // Comentario: Eliminado el valor "auto" de height
    alt="Logotipo del Club de Fútbol Tigres UANL"
    />
    </div>
    <div id="Encabezado" className="basis-2/4 align-top">
        <h1 className={`${ archivo_black.className } text-center text-4xl text-blue-900 font-bold`}>ACADEMIA DE FÚTBOL</h1>
        <h2 className={`${ archivo_black.className } text-center text-4xl text-blue-900 font-bold tracking-wide`}>TIGRES LINARES</h2>
        <h3 className={`${ archivo_black.className } text-center text-xl text-blue-900 font-bold tracking-wide`}>"Prof. José Alfonso Rodríguez Salazar"</h3>
        <h4 className={`${ archivo_black.className } text-center text-xl text-white font-bold tracking-wide`}>Sistema de Gestión Administrativo</h4>        
    </div>
    <div id="logo-academia" className="flex justify-center items-center basis-1/4">
    <Image
    src="/logo-academia.svg"
    width={100}
    height={100}
    alt="Logotipo del Club de Fútbol Tigres UANL"
    />

</div>
</div>

</>    )
};

