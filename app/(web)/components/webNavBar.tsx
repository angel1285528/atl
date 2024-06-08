"use client";
import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';
import Logo from './LogoNavBar';

const menuItems = [
    // {
    //     menuSection: "ACADEMIA TIGRES LINARES",
    //     itemsMenuSection: ["Conócenos", "Nuestra Historia", "Programa de Trabajo", "Torneo Internacional de Academias Tigres"]
    // },
    {
        menuSection: "PLANTEL 2024-2025",
        itemsMenuSection: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
    },
];

const WebNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<null | number>(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSubmenuToggle = (index: number) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="bg-blue-900 md:bg-[url('/patronAzul.jpg')] h-20 flex items-center justify-between px-4 md:px-10 relative z-50">
                <button className="md:hidden text-white ml-4" onClick={handleMenuToggle}>
                    <FaBars className="w-6 h-6" />
                </button>
                <Logo /> {/* Use the Logo component */}
                <div className="hidden md:flex md:justify-start md:flex-grow md:ml-32">
                    {menuItems.map((menu, index) => (
                        <div key={index} className="relative group mx-4">
                            <div className="flex items-center cursor-pointer text-lg font-extrabold text-yellow-400 relative after:absolute after:content-[''] after:w-full after:h-[3px] after:bg-yellow-400 after:left-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100" onClick={() => handleSubmenuToggle(index)}>
                                {menu.menuSection}
                                <FaChevronDown className={`ml-2 transform transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} />
                            </div>
                            {openSubmenu === index && (
                                <ul className="absolute top-full left-0 w-full bg-black text-yellow-400 mt-2 py-2 z-50">
                                    {menu.itemsMenuSection.map((subItem, subIndex) => (
                                        <li key={subIndex} className="px-4 py-2 text-lg font-bold relative after:absolute after:content-[''] after:w-full after:h-[3px] after:bg-yellow-400 after:left-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                            <Link href={`/plantilla/${subItem}`}>{subItem}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
            <div className={`fixed top-0 left-0 w-full h-full bg-blue-900 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
                <button className="text-white p-4" onClick={handleCloseMenu}>
                    <FaTimes className="w-6 h-6" />
                </button>
                <ul className="mt-20 space-y-4 text-yellow-400 px-4">
                    {menuItems.map((menu, index) => (
                        <li key={index} className="relative">
                            <div className={`flex items-center cursor-pointer px-4 py-2 text-lg font-extrabold ${openSubmenu === index ? 'bg-blue-800' : ''}`} onClick={() => handleSubmenuToggle(index)}>
                                {menu.menuSection}
                                <FaChevronDown className={`ml-2 transform transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} />
                            </div>
                            {openSubmenu === index && (
                                <ul className={`bg-black text-yellow-400 mt-2 w-full ${menu.menuSection === "PLANTEL 2024-2025" ? 'grid grid-cols-1 md:grid-cols-3 gap-4' : 'space-y-2'}`}>
                                    {menu.itemsMenuSection.map((subItem, subIndex) => (
                                        <li key={subIndex} className="px-4 py-2 text-lg font-bold relative after:absolute after:content-[''] after:w-full after:h-[3px] after:bg-yellow-400 after:left-0 after:bottom-[-3px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                            <Link href={`/plantilla/${subItem}`}>{subItem}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default WebNavbar;
