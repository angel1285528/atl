'use client'
import React from 'react';
import { usePathname} from 'next/navigation';
import {QRCodeSVG} from 'qrcode.react';



const CurrentPageQRCode = () => {
    const pathname = usePathname()
  
    // Construye la URL completa de la página actual
    const currentPageUrl = `${window.location.origin}${pathname}`;
  
    return <QRCodeSVG value={currentPageUrl} size={128} />;
  };
  
  export default CurrentPageQRCode;