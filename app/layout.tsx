import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className='bg-gradient-to-b from-gray-700 via-gray-900 to-black'>{children}</body>
    </html>
  );
}