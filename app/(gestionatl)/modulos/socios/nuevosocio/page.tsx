import FormularioSocio from '../componentes/formulario-socio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Page() {
    return (
        <>
            <div id="instructions" className="w-full md:w-3/4 lg:w-2/3 pt-6 mx-auto text-amber-500">
            <h1 className="text-3xl md:text-4xl text-center">Registro de Socios</h1>
            <h2 className="text-center text-xl md:text-2xl">Academia Tigres Linares</h2>
    <p className="text-lg md:text-xl mx-4 md:mx-6">Instrucciones: Ingresa los datos requeridos en cada campo. ANTES DE LLENAR EL FORMULARIO TEN A LA MANO IDENTIFICACIÓN DE LA PERSONA.</p>
            </div>
            <div className="flex flex-col mx-auto">
                <FormularioSocio />
                < ToastContainer />
            </div>
        </>
    )
}