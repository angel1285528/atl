import  Header from "@/app/(gestionatl)/ui/header";
import '@/app/globals.css'
import { oswald } from "../ui/fonts";

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
      <body className="bg-sky-700 bg-repeat pt-8 md:size-auto" >
      <main className={`${oswald.className} antialiased pt-8 bg-stone-200 rounded-lg drop-shadow-xl backdrop-brightness-125 size-11/12 mx-auto h-auto min-h-full`}>
      <p className="text-center text-2xl font-bold">#AcademiaTigresLinares</p>
      <Header /> 
               {children}
      </main>
      </body>
      </html>
    )
  }