import fetchPlayersByCategory from '../../lib/fetchJugadoresXCategoria';
import PlayerList from '../../components/playerList';
import CategoriasHeader from '../../components/headerCategorias';

export const dynamic = 'force-dynamic';

type Params = {
    params: {
        categoria: string;
    };
};

const categorias = ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];

export default async function CategoryPage({ params }: Params) {
    const { categoria } = params;
    const players = await fetchPlayersByCategory(categoria);

    return (
        <>
            <hr className='h-6 bg-white'/>
            <main className="bg-black w-full">
                <CategoriasHeader categorias={categorias} activeCategoria={categoria} />
                <h1 className='text-left text-yellow-500 mt-12 ml-8 text-4xl'>JUGADORES</h1>
                <PlayerList players={players} />
            </main>
        </>
    );
}
