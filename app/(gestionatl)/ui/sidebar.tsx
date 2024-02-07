'use client';
import Image from "next/image";

export default function SideBar() {
    return (
        <div id="sidebar" className="flex flex-col h-full">
            <div id="sidebartop" className= "bg-blue-800 py-5 border-b-8 border-amber-500">
                <div id="logo" className="flex justify-center">
                    <Image
                        src="/logo-academia.svg"
                        width={120}
                        height={120}
                        alt="Logotipo del Club de Fútbol Tigres UANL"
                    />                    
                </div>
                <div className="pt-3">
                                        <h1 className="text-amber-500 text-center text-2xl font-bold">Academia Tigres Linares</h1>
                </div>

            </div>
            <div id="sidebarElements" className=" bg-gray-300 flex-grow">
<a href="">a    </a>
            </div>
        </div>
    )
};

/*
import Image from 'next/image';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export default function SideBar() {
return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
            <Sidebar.ItemGroup className='bg-yellow-500 mt-0'>
                <Sidebar.Item>
                    <Image
                     src="/logo-academia.svg"
                     width={80}
                     height={80}
                     alt="Logotipo del Club de Fútbol Tigres UANL"
                     />
                                        
                    </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                    Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                    Kanban
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiInbox}>
                    Inbox
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                    Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                    Sign Up
                </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                    Upgrade to Pro
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                    Documentation
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiBuoy}>
                    Help
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
);
}
*/