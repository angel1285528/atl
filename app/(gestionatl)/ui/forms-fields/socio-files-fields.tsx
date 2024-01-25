'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import SocioPhoto from './photo';
import InePhoto from './Ine';

const FilesFields: React.FC = () => {
    const { register } = useFormContext();
    return (
        <div className='grid grid-cols-2 w-3/4 gap-5 mx-auto'>
            <div className='photo'>
                <label htmlFor="urlSocioPhoto" className='ml-6'>Fotografía </label> <br />
                <SocioPhoto />
        </div>
            <div>
            <label htmlFor="urlInePhoto" className='ml-6'>Identificación del Socio </label> <br />
                <InePhoto />
            </div>


        </div>
    );
}
export default FilesFields;