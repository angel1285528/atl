"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

type CategoriasHeaderProps = {
    categorias: string[];
    activeCategoria: string;
};

const CategoriasHeader: React.FC<CategoriasHeaderProps> = ({ categorias, activeCategoria }) => {
    const [activeCategory, setActiveCategory] = useState(activeCategoria);

    useEffect(() => {
        setActiveCategory(activeCategoria);
    }, [activeCategoria]);

    return (
        <header className='text-white pt-10 ml-8 flex space-x-4 text-2xl'>
            <span>TIGRES LINARES</span>
            <span>|</span>
            {categorias.map((cat, index) => (
                <Link key={index} href={`/plantilla/${cat}`} passHref>
                    <span
                        onClick={() => setActiveCategory(cat)}
                        className={`cursor-pointer ${activeCategory === cat ? 'text-yellow-500 font-extrabold' : 'hover:text-yellow-500'} ${activeCategory === cat ? '' : 'hover:font-extrabold'}`}
                    >
                        {cat}
                    </span>
                </Link>
            ))}
        </header>
    );
};

export default CategoriasHeader;
