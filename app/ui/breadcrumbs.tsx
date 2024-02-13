'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa';
import React from 'react';

const Breadcrumbs = () => {
  const pathname = usePathname()

  // Obtén la ruta actual y divídela en segmentos
  const pathSegments = pathname.split('/').filter(segment => segment)

  return (
    <nav aria-label="breadcrumb" className=':ml-8 md:font-bold text-xl pt-2 text-white'>
      <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
        {/* Ícono de inicio */}
        <li style={{ marginRight: '0.5rem', color: '#ccc' }}>
          <FaHome />
        </li>

        {/* Enlace de "Inicio" */}
        <li style={{ marginRight: '0.5rem' }}>
          <Link href="/">
            <p className="text-white">Inicio</p>
          </Link>
        </li>

        {/* Genera un enlace de breadcrumb para cada segmento de la ruta */}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`

          return (
            <React.Fragment key={path}>
              {/* Separador ">" */}
              <li style={{ marginRight: '0.5rem', color: '#ccc' }}>{'>'}</li>

              {/* Enlace de cada segmento */}
              <li style={{ marginRight: '0.5rem' }}>
                <Link href={path}>
                  <p className="text-white">{segment}</p>
                </Link>
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs