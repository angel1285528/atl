'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import {QRCodeSVG} from 'qrcode.react';

const CurrentPageQRCode = () => {
    const router = useRouter();
  
    // Construye la URL completa de la página actual
    const currentPageUrl = `${window.location.origin}${router.asPath}`;
  
    return <QRCodeSVG value={currentPageUrl} size={128} />;
  };
  
  export default CurrentPageQRCode;