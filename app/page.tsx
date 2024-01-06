import React from 'react';
import  Image  from 'next/image';
import { TiSocialFacebookCircular, TiSocialInstagramCircular  } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";
import Link from 'next/link';


export default function Home() {
  return (
    <>
     <main>
        <div className='flex flex-col mb-auto' >
            <div id="titulo" className='mx-auto pt-16 text-amber-400'>
                <h1 className='text-6xl text-center antialiased font-bold tracking tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'>Academia Tigres Linares</h1>
            </div>  
            <div id="logo" className='mx-auto pt-12 m-4'>
      <Image
        src="/logo-academia.svg"
        width={300}
        height={300}
        className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'
        alt='Logotipo Academia Tigres Linares'
        />
            </div>
            <div id="sitio-en-construccion" className='mx-auto'>
              <h3 className=' text-4xl antialiased font-bold text-white'>Sitio web en construcción</h3>
            </div>
            <div id="icons" className='flex flex-row items-stretch mx-auto'>
            <a href="https://www.facebook.com">
            <TiSocialFacebookCircular className="mx-auto size-16"/>
            </a>
            <a href="https://www.facebook.com">
            <TiSocialInstagramCircular  className="mx-auto size-16"/>
            </a>
            <a href="https://www.facebook.com" className='align-middle object-scale-down'>
            <BsWhatsapp className="mx-auto size-14 pt-2 object-scale-down"/>
            </a>
            <a href="https://www.facebook.com">
            <MdOutlineEmail className="mx-auto size-16"/>
            </a>
            <a href="https://www.facebook.com">
            <SiTiktok className="mx-auto size-14 pt-2 object-scale-down"/>
            </a>

            </div>
        </div> 
      </main>
    </>
     )
}
