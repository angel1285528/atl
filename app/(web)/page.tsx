import React from 'react';
import Image from 'next/image';
import { TiSocialFacebookCircular, TiSocialInstagramCircular } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";

export default function Home(): React.JSX.Element {
  return (
    <main>
      
      <div id='content' className='flex flex-col mb-auto'>
        <div id="logo" className='mx-auto pt-8 m-2'>
          <Image
            src="/logo-academia.svg"
            width={200}
            height={200}
            className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'
            priority={true}
            alt='Logotipo Academia Tigres Linares'
          />
        </div>
        <div id="titulo" className='flex-initial text-indigo-800'>
          <h1 className='md:text-7xl text-center antialiased font-bold tracking tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'>ACADEMIA</h1>
        </div>

        <div className='mx-auto text-center'>
        <h2 className='md:text-7xl text-indigo-800 md:ml-8 text-center antialiased font-bold tracking tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'>TIGRES LINARES</h2>
        <div id="sitio-en-construccion" className='mx-auto text-center'>
          <h3 className='text-4xl antialiased font-bold text-white'>Sitio web en construcción</h3>
        </div>
        </div>
        <div id="icons" className='flex justify-center items-center mx-auto'>
          <a href="https://facebook.com/tigres.linares.oficial">
            <TiSocialFacebookCircular className="size-16" />
          </a>
          <a href="https://www.instagram.com/academiatigreslinares/">
            <TiSocialInstagramCircular className="size-16" />
          </a>
          {/*} <a href="https://www.facebook.com">
            <BsWhatsapp className="size-14 pt-2" />
          </a> */}
          <a href="mailto:info@tigreslinares.com">
            <MdOutlineEmail className="size-16" />
          </a>
          {/* <a href="https://www.facebook.com">
            <SiTiktok className="size-14 pt-2" />
          </a>*/}
        </div>
        <div id='documentos' className='text-center text-blue-800 text-xl font-bold'>
          <h3><a href="https://drive.google.com/file/d/1R-6RPy4OzMuq-zDx_vCpX_H_7Iqe8VxA/view?usp=drive_link">Descargar Ficha de Datos Familiares</a></h3>
          <h3><a href="https://drive.google.com/file/d/1oG1Wh0L4w8oEbPJTDarOQ8wypny7DmsP/view?usp=drive_link">Descargar Ficha de Inscripción de Jugadores</a></h3>
          
        </div>
          </div>
    </main>
  )
}