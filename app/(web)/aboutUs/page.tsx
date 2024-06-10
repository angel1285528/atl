import React from 'react';
import { ClockIcon } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
    return (
        <>
            <div id='content' className=''>
                <div
                    id="block1"
                    className="relative w-full h-80 bg-cover bg-center border border-gray-300 transform transition-transform duration-300"
                    style={{ backgroundImage: 'url(/main2.jpg)' }}
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
                    <div id="contentSection" className='bg-white mx-4 md:mx-20 py-10'>
                        <div id='Breadcrumb' className='pt-8 mx-4 md:mx-20'>
                            <Link href="/">
                                <span className='font-bold text-2xl'>Inicio /</span>
                            </Link>
                            <Link href="/academia/">
                                <span className='font-bold text-2xl'>Academia /</span>
                            </Link>
                            <span className='text-xl'> Conocenos</span>
                            <hr className="w-full my-4" />
                            <div className='flex items-center space-x-4 mt-4'>
                                <button className='bg-yellow-400 text-blue-700 py-2 px-3 font-bold'>Academia</button>
                                <span className='text-4xl'>|</span>
                                <ClockIcon />
                                <span>Junio 2024</span>
                            </div>
                        </div>
                        <div id="aboutUs" className='my-10 mx-4 md:mx-20 space-y-6 text-lg md:text-xl text-black'>
                            <p>
                                El Club Tigres de la Universidad Autónoma de Nuevo León, a través de sus Academias, tiene como misión proporcionar un servicio a la comunidad mediante la enseñanza de valores sociales y educativos. Buscamos alejar a la juventud de la ociosidad y los vicios, formando jóvenes sanos e íntegros desde temprana edad. Esto contribuye a una mayor convivencia e integración familiar a través de la práctica del fútbol.
                            </p>
                            <p>
                                Conscientes del papel social del fútbol en la formación, el club Tigres impulsa este deporte mediante las Academias Tigres, presentes a nivel nacional e internacional.
                            </p>
                            <p>
                                En el año 1994, el Profesor José Alfonso Rodríguez Salazar (QEPD), conocido como el Profe Poncho en nuestra comunidad, tuvo la iniciativa de fundar la &quot;Escuela Club de Fútbol Linares&quot; en las instalaciones del seminario de Linares con la idea de dar clases de futbol a niños y jóvenes, mediante el cuestionamiento de que si el niño juega para aprender o se aprende para jugar.
                            </p>
                            <p>
                                Con el transcurso del tiempo se percató que estaba cumpliendo con el proceso formativo, pero faltaba la etapa de desarrollo competitivo por lo que se trazo la meta de afiliarse a un club profesional con el objetivo de que la niñez y juventud de Linares tuvieran la oportunidad de acariciar el sueño del fútbol profesional.
                            </p>
                            <p>
                                Es por esto que en el año 2005 se tocaron las puertas de Sinergia Deportiva, donde el Prof. Osvaldo Batocletti, encargado del Área de Academias, dio el visto bueno y el apoyo necesario para establecer la primera franquicia de una Academia Profesional de Fútbol en Linares, comenzando a dar servicio en las Instalaciones Deportivas del Grupo Senda durante 15 años, logrando con esto cumplir las metas propuestas al proyectar diferentes jóvenes Linarenses en procesos de Fuerzas Básicas así como la participación en Torneos Estatales, Nacionales e Internacionales.
                            </p>
                            <p>
                                En octubre del 2021, después de una pandemia que sorprendió al mundo entero y nos hizo a todos hacer una breve pausa en nuestros caminos y proyectos, una vez levantadas las restricciones sanitarias nos vemos en la necesidad de buscar un nuevo espacio de entrenamiento, estableciendo un acuerdo con la Dirección de Deportes de la Universidad Autónoma de Nuevo León para utilizar las instalaciones del Polideportivo Tigres Linares, donde entrenamos actualmente, agradeciendo especialmente las facilidades del Dr. José Alberto Pérez García, Director de Deportes de la UANL así como del Lic. Sergio Perales Cepeda, Coordinador del Polideportivo Tigres.
                            </p>
                            <p>
                                A día de hoy, Academia Tigres Linares se encuentra bajo la dirección del Licenciado en Ciencias del Ejercicio Ángel Eduardo Rodríguez Perales y el Director Técnico Marco Antonio González Zambrano, conformando el cuerpo técnico de los diferentes equipos la Profa. Citlalli Luna Alameda, el Prof. Jesús Eduardo Romo Soto, el Prof. Enrique Antonio Garza Carrizales, el Lic. Donaldo Cayetano Mejorado Ortega, el Lic. Obed Alfredo López y el Prof. Armando Amezcua Bocanegra.
                            </p>
                            <p>
                                Nuestra academia actualmente la integran aproximadamente 90 niñas, niños y jóvenes de Linares y la Región entre los 3 a los 16 años, quienes de la mano de sus familias en cada entrenamiento y partido buscan ser una mejor versión de ellos mismos y enfrentar los retos que les demanda el deporte.
                            </p>
                            <p>
                                Esto es Tigres!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
