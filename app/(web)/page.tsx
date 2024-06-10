import React from 'react';
import { NewspaperIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home(): React.JSX.Element {
  return (
    <main>
      <div id='content' className='flex flex-col mb-auto'>
        <div id="mainBlocks" className="flex flex-col h-auto md:flex-row mt-0 md:h-[calc(80vh-5rem)]">
          <div
            id="block1"
            className="relative w-full md:w-2/4 h-64 md:h-auto bg-cover bg-center border border-gray-300 transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: 'url(/main1.jpeg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute top-4 left-4 drop-shadow-lg">
              <NewspaperIcon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12">
            <Link href="/academia">
              <span className="text-2xl md:text-6xl font-bold text-white hover:text-yellow-500 hover:underline transition duration-300">
                Academia Tigres Linares
              </span></Link>
              <div>
              <Link href="/academia">
                <Button className="mt-2 bg-yellow-500 text-blue-900 text-lg font-semibold py-2 px-4 rounded-none">
                  Informes
                </Button>
              </Link>
              </div>
            </div>
          </div>
          <div
            id="block2"
            className="relative w-full md:w-1/4 h-64 md:h-auto bg-cover bg-center border border-gray-300 transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: 'url(/main2.jpg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute top-4 left-4 drop-shadow-lg">
              <NewspaperIcon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-4 left-4 md:left-12 md:bottom-12 ">
             <Link href="/aboutUs">
              <span className="text-2xl md:text-5xl font-bold text-white hover:text-yellow-500 hover:underline transition duration-300">
                Conócenos
              </span>
             </Link>
              <div>
              <Link href="/aboutUs">
                <Button className="mt-2 bg-yellow-500 text-blue-900 text-lg font-semibold py-2 px-4 rounded-none">
                  Saber más
                </Button>
              </Link>
              </div>
            </div>
          </div>
          <div
            id="block3"
            className="relative w-full md:w-1/4 h-64 md:h-auto bg-cover bg-center border border-gray-300 transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: 'url(/poli.jpg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute top-4 left-4 drop-shadow-lg">
              <NewspaperIcon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-4 left-4 md:left-12 md:bottom-12">
              <Link href="https://maps.app.goo.gl/wDA6A9PeeZhV58Qt5">
              <span className="text-2xl md:text-3xl font-bold text-white hover:text-yellow-500 hover:underline transition duration-300">
                ¡Te esperamos en el Polideportivo Tigres Linares!
              </span>
              <div>
                <Button className="mt-2 bg-yellow-500 text-blue-900 text-lg font-semibold py-2 px-4 rounded-none">
                  Ubicación
                </Button>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
