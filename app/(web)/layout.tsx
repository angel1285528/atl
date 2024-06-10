import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import BlackTop from './components/blacktop'
import WebNavbar from './components/webNavBar'
import WebFooter from './components/footer'
import WebSponsors from './components/sponsors'
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
      <body className='bg-yellow-400'>
        <BlackTop />
        <WebNavbar />
        {children}
        <hr className=' h-10 bg-blue-900'/>
        {/* <WebSponsors /> */}
        <WebFooter/>
      </body>
    </html>
  );
}
