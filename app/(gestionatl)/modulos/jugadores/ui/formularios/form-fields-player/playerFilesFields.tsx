'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import PlayerPhoto from './playerPhoto';
import { Button } from '@/components/ui/button';

const PlayerFilesFields: React.FC = () => {
    const { register } = useFormContext();
    return (
        <div className='grid grid-cols-2 w-3/4 gap-5 mx-auto'>
            <div className='photo'>
                <label htmlFor="urlSocioPhoto" className='ml-6'>Fotografía </label> <br />
                <PlayerPhoto />
        </div>
            <div>
            <label htmlFor="urlSocioIne" className='ml-6'>Huella Digital </label> <br />
               <Button type="button" className="btn bg-amber-500">Tomar Huella</Button>   
            </div>


        </div>
    );
}
export default PlayerFilesFields;