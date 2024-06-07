// app/(web)/plantilla/[categoria]/page.tsx
import fetchPlayersByCategory from '../../lib/fetchJugadoresXCategoria';
import PlayerList from '../../components/playerList';
import Link from 'next/link';

type Params = {
    params: {
        categoria: string;
    };
};
const categorias = ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]
export default async function CategoryPage({ params }: Params) {
    const { categoria } = params;
    const players = await fetchPlayersByCategory(categoria);

    return (
        <div className="flex">
            <aside className="w-64 fixed h-full bg-gray-100 p-4">
                {/* Aquí puedes agregar el contenido de la sidebar */}
                <nav>
                <ul>
        {categorias.map((cat, index) => (
            <li key={index}>
                <Link href={`/plantilla/${cat}`}>
                    {cat}
                </Link>
            </li>
        ))}
    </ul>
                </nav>
            </aside>
            <main className="ml-64 w-full p-4">
                <PlayerList players={players} />
            </main>
        </div>
    );
}
