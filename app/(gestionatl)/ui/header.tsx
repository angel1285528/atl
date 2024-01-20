import Image from "next/image"

export default function Header() {
    return (
<>
<div id="Header" className="flex">
    <div id="logo-tigres" className="flex basis-1/3 justify-center items-center">              
    <Image
    src="/logo-tigres-oficial.png"
    width={80}
    height={110}
    alt="Logotipo del Club de Fútbol Tigres UANL"
    />
    </div>
    <div id="Encabezado" className="basis-1/3">
        <h1 className="text-center text-4xl pt-10 font-bold">Modulo de Gestión</h1>
        <h2 className="text-center text-2xl font-bold">Academia Tigres Linares</h2>
    </div>
    <div id="logo-academia" className="flex justify-center items-center basis-1/3">
    <Image
    src="/logo-academia.svg"
    width={130}
    height={170}
    alt="Logotipo del Club de Fútbol Tigres UANL"
    />

</div>
</div>

</>    )
};

