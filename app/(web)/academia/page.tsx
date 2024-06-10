import React from 'react';
import { ClockIcon } from 'lucide-react';
import Link from 'next/link';
const questions = [
    {
        question: "¿Cuáles son los días y horas de Entrenamiento?",
        answer: "Academia Tigres Linares entrena los dias Lunes, Miércoles y Viernes"
    },
    {
        question: "¿De que edades son los jugadores que entrenan?",
        answer: "Entrenamos jugadores a partir de los 3 hasta los 16 años"
    },
    {
        question: "¿Cuales son sus horarios?",
        answer: "Durante los meses de junio, julio y agosto los entrenamientos son de 6:30 a 7:30 para edades preescolar, de 6:30 a 7:50 para primaria, secundaria y prepa"
    },
    {
        question: "¿Las niñas también pueden entrenar?",
        answer: "Tenemos grupos mixtos donde todos los niños y niñas son bien recibidos"
    },
    {
        question: "¿Que necesito para inscribirme?",
        answer: "Necesitamos principalmente la clave curp tanto del familiar responsable como del alumno. Puedes entregar una foto digital del Ine del familiar y el curp el jugador, ahi estan los datos necesarios"
    },
    {
        question: "¿Se necesita más papelería?",
        answer: "Posteriormente debes de entregar acta de nacimiento original, identificacion del jugador y comprobante de domicilio así como firmar el reglamento del club"
    },
    {
        question: "¿Que necesito llevar para entrenar ?",
        answer: "Acude con ropa y calzado deportivo y suficiente hidratación. Los lunes entrenamos con cualquier playera amarilla, el miércoles con cualquier playera azul y el viernes con amarilla o azul, si no tienes en tu primer entrenamiento te prestamos una casaca del color "
    },    {
        question: "¿Hay uniforme de entrenamiento?",
        answer: "No hay uniforme de entrenamiento, cualquier playera sea de Tigres o no que cumpla con el color indicado es valida para ir a entrenar "
        
    },
    {
        question: "¿Donde participan con sus equipos ?",
        answer: "Participamos en los torneos municipales infantiles del Municipio de Linares y cada ciertos meses acudimos a torneos foraneos"

    },
    {
        question: "¿Cuanto cuestan los uniformes?",
        answer: "Las jugadores pertenecientes a una franquicia de academia oficial del Club Tigres tiene que adquirir un paquete de uniformes proporcionados por el club con un costo de $950.00, incluye uniforme de local y visitante"

    },
    
];

const Page = () => {
    return (
        <>
            <div id='content' className=''>
                <div
                    id="block1"
                    className="relative w-full h-80 bg-cover bg-center border border-gray-300 transform transition-transform duration-300"
                    style={{ backgroundImage: 'url(/main1.jpeg)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12">
                        <span className="text-2xl md:text-6xl font-bold text-white transition duration-300">
                            Academia Tigres Linares
                        </span>
                        <div>
                            <span className="mt-4 text-white text-2xl font-semibold py-4">
                                Información y requisitos de inscripción
                            </span>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-400 block'>
                    <div id="contentSection" className='bg-white mx-4 md:mx-20'>
                        <div id='Breadcrumb' className='pt-8 mx-4 md:mx-20'>
                           <Link href="/">
                           <span className='font-bold text-2xl'>Inicio /</span>
                           </Link> 
                           <Link href="/academia/">
                           <span className='font-bold text-2xl'>Academia /</span>
                           </Link>
                           
                            <span className='text-xl'> Preguntas Frecuentes</span>
                            <hr className="w-full my-4" />
                            <div className='flex items-center space-x-4 mt-4'>
                                <button className='bg-yellow-400 text-blue-700 py-2 px-3 font-bold'>Academia</button>
                                <span className='text-4xl'>|</span>
                                <ClockIcon />
                                <span>Junio 2024</span>
                            </div>
                        </div>
                        <div id="questions" className='my-10 mx-4 md:mx-20'>
                            {questions.map((q, index) => (
                                <div key={index} className='mb-8'>
                                    <h3 className='text-3xl md:text-5xl font-semibold text-blue-900 mb-4'>{q.question}</h3>
                                    <p className='text-lg md:text-2xl text-black'>{q.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="lateraliFrame"></div>
                </div>
            </div>
        </>
    );
};

export default Page;
