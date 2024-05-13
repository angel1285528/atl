import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SignIn } from '../(auth)/(utils)/componets/singInButton'
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
      <body className='bg-yellow-400'>{children}
      {/* f */}
      </body>
    </html>
  );
}