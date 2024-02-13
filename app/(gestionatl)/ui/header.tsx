'use client'

import React from 'react';
import Breadcrumbs from '@/app/ui/breadcrumbs';
export default function Header() {
    return (
        <>
            <div id="Header" className="bg-blue-800 md:h-10 md:rounded-l-full md:ml-8" >
                <Breadcrumbs />
            </div>

        </>)
};

