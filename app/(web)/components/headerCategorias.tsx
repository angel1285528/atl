"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type CategoriasHeaderProps = {
    categorias: string[];
    activeCategoria: string;
};

const CategoriasHeader: React.FC<CategoriasHeaderProps> = ({ categorias, activeCategoria }) => {
    const [activeCategory, setActiveCategory] = useState(activeCategoria);
    const router = useRouter();

    useEffect(() => {
        setActiveCategory(activeCategoria);
    }, [activeCategoria]);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        router.push(`/plantilla/${category}`);
    };

    return (
        <>
            {/* Header for screens > MD */}
            <header className='hidden text-white pt-10 ml-8 md:flex space-x-4 text-2xl'>
                <span>TIGRES LINARES</span>
                <span>|</span>
                {categorias.map((cat, index) => (
                    <Link key={index} href={`/plantilla/${cat}`} passHref>
                        <span
                            onClick={() => setActiveCategory(cat)}
                            className={`cursor-pointer ${activeCategory === cat ? 'md:text-yellow-500 font-extrabold' : 'hover:text-yellow-500'} ${activeCategory === cat ? '' : 'hover:font-extrabold'}`}
                        >
                            {cat}
                        </span>
                    </Link>
                ))}
            </header>
            {/* Header for screens < MD */}
            <header className='md:hidden pt-6'>
                <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-[calc(100%-2rem)] ml-4 mr-4 bg-transparent text-left border-white text-white ">
                        <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                        {categorias.map((cat, index) => (
                            <SelectItem key={index} value={cat}>
                                {cat}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </header>
        </>
    );
};

export default CategoriasHeader;
