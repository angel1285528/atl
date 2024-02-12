'use client'
import {
    FiUserPlus,
    FiEdit,
    FiChevronDown,
    FiLayers,
  
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


const menuItems = [
  //0 - Componentes del modulo Socios    
  {imageUrl: '/iconos-modulos/socios.svg',
   title: "Socios",
        items: [
          {
            icon: FiLayers,
            text: "Gestión Socios",
            href: "/modulos/socios/"
                },
          {
            icon: FiUserPlus,
            text: "Registrar Socio",
            href: "/modulos/socios/nuevosocio"
                },
            {
            icon: FiEdit,
            text: "Editar Socios",
            href: "/modulos/socios/"
              }
            ]
    },
    //1 - Componentes del Menu Jugadores
    {imageUrl: '/iconos-modulos/player.svg',
      title: "Jugadores",
      items:[
        {
            icon: FiLayers,
            text: "Gestión Jugadores",
            href: "/modulos/jugadores/"
        },
        {
        icon: FiUserPlus,
        text: "Registrar Jugador",
        href: "#"
        }
      ]
    },
    {imageUrl: '/iconos-modulos/entrenador.svg',
      title: "Entrenadores",
  items:[]},
  {imageUrl: '/iconos-modulos/grupos.svg',
  title: "Grupos Entrenamiento",
items:[
  {
    icon: FiUserPlus,
    text: "Grupos",
    href: "#"
    }
]}
];
  


const Menu = ({ imageUrl, icon, title , items}) => {
    const [open, setOpen] = useState(false);

return (
    <main>
    <div className="flex flex-row mt-7 justify-center ">
      <div className="mx-auto bg-slate-400 border-inherit border-4 rounded-lg border-double outline-offset-4">
      {imageUrl && (
        <div className="w-32 h-32 relative">
       <Image 
       src={imageUrl} 
       layout="fill" 
       objectFit="contain"
       className="pb-4" 
       alt={`Imagen de ${title}`} 
       /> 
       </div>
      )}
      </div>
      </div>
      <div>
<motion.div animate={open ? "open" : "closed"} className="relative w-34 mx-auto"> {/* Ajusta el ancho aquí */}
    <button onClick={() => setOpen((pv) => !pv)} className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-indigo-50 bg-sky-500 hover:bg-sky-600 transition-colors text-2xl w-full">
        <span className="font-medium text-xl uppercase tracking-wider">{title}</span>
        <motion.span variants={iconVariants}>
            <FiChevronDown />
        </motion.span>
    </button>
        
        <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
         className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-[100%] overflow-hidden">
        {items.map((item) => (
            <MenuItem key={item.text} setOpen={setOpen} {...item} />
        ))}
        </motion.ul>
    </motion.div>
      </div>
    
    </main>
);
};

const MenuItem = ({ icon: Icon, text, href, setOpen }) => {
  return(
  <Link href={href} passHref>
       <motion.li onClick={() => setOpen(false)} className="flex items-center gap-2 w-full p-2  text-base font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-sky-500 transition-colors cursor-pointer">
           { Icon && (
          <Icon /> // Añade clases de Tailwind según necesites
           )}
           <span>{text}</span>
       </motion.li>
   </Link>
  );
}

const Socios = () => {
  return (
      <div className="flex flex-row gap-x-4">
          {menuItems.map((menu) => (
              <Menu 
                  key={menu.title} 
                  title={menu.title} 
                  items={menu.items} 
                  imageUrl={menu.imageUrl} // Pasar la imageUrl a cada Menu
              />
          ))}
      </div>
  );
};

export default Socios;

const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };