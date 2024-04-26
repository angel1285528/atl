import React from 'react';
import Image from 'next/image';
import { TiSocialFacebookCircular, TiSocialInstagramCircular } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";



export default function Home(): React.JSX.Element {
  return (
    <>
      <main>
      <div className='flex flex-col md:flex-row mb-auto md:pt-8'>
  <div id="logo" className='md:flex-none mx-auto md:ml-8 pt-8 md:pt-8 m-4'>
    <Image
      src="/logo-academia.svg"
      width={200}
      height={200}
      className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'
      priority={true}
      alt='Logotipo Academia Tigres Linares'
    />
  </div>
  <div id="titulo" className='flex-initial text-indigo-800 md:pt-8'>
    <h1 className='md:text-9xl text-left antialiased font-bold tracking tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'>ACADEMIA</h1>
  </div>
</div>

        <div>
          <h2 className='md:text-9xl md:pt-8  md:ml-8 text-center antialiased font-bold tracking tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]'>TIGRES LINARES</h2>
          <div id="sitio-en-construccion" className='mx-auto'>
            <h3 className=' text-4xl antialiased font-bold text-white'>Sitio web en construcción</h3>
          </div>
          <div id="icons" className='flex flex-row items-stretch mx-auto'>
            <a href="https://www.facebook.com">
              <TiSocialFacebookCircular className="mx-auto size-16" />
            </a>
            <a href="https://www.facebook.com">
              <TiSocialInstagramCircular className="mx-auto size-16" />
            </a>
            <a href="https://www.facebook.com" className='align-middle object-scale-down'>
              <BsWhatsapp className="mx-auto size-14 pt-2 object-scale-down" />
            </a>
            <a href="https://www.facebook.com">
              <MdOutlineEmail className="mx-auto size-16" />
            </a>
            <a href="https://www.facebook.com">
              <SiTiktok className="mx-auto size-14 pt-2 object-scale-down" />
            </a>

          </div>
        </div>
      </main>
    </>
  )
}
