import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Academia Tigres Linares',
  description: 'Pagina Oficial de Academia Tigres Linares',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-gray-700 via-gray-900 to-black'>
        <div id='BlackTop' className='bg-black py-2'>
          <span className='text-white'>
            <span>
              <span className=' font-bold'>ACADEMIA TIGRES</span> LINARES
              </span>
              <span> | Club Tigres</span>
            </span>
            

        </div>
        <div id='NavBar' className=' bg-blue-600 h-20 md:h-24'></div>
      {children}</body>
    </html>
  );
}