import FormularioSocio from "@/app/(gestionatl)/ui/formulario-socio"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Page() {
    return (
        <>
            <div id="instructions" className=" w-2/3 pt-6 mx-auto text-amber-500">
                <h1 className="text-4xl text-center">Registro de Socios</h1>
                <h2 className="text-center text-2xl">Academia Tigres Linares</h2>
                <p className="text-xl mx-6">Intrucciones: Ingresa los datos requeridos en cada campo, ANTES DE LLENAR EL FORMULARIO TEN A LA MANO IDENTIFICACION DE LA PERSONA </p>
            </div>
            <div className="flex flex-col w-2/3 mx-auto">
                <FormularioSocio />
                < ToastContainer />
            </div>
        </>
    )
}