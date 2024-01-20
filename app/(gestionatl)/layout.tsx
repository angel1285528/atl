import  Header from "@/app/(gestionatl)/ui/header";
import '@/app/globals.css'

export const metadata = {
    title: 'Modulo de Gestion - ATL',
    description: 'Modulo interno de gestion atl',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html>
      <body className="bg-sky-700 pt-8" >
      <main className=" pt-8 bg-amber-400 rounded-lg drop-shadow-xl backdrop-brightness-125 size-11/12 mx-auto">
      <Header /> 
               {children}
      </main>
      </body>
      </html>
    )
  }