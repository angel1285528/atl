'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import SocioPhoto from './photo';
import InePhoto from './Ine';

const FilesFields: React.FC = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-3/4 gap-5 mx-auto'>
            <div className='flex flex-col'>
                <label htmlFor="urlSocioPhoto" className='mb-2 font-extrabold'>Fotografía:</label>
                <SocioPhoto />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="urlSocioIne" className='mb-2 font-extrabold'>Identificación del Socio:</label>
                <InePhoto />
            </div>
        </div>
    );
}
export default FilesFields;