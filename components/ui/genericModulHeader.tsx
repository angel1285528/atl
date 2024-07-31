'use client'
import React from 'react';
import GenericHR from './GenericHorizontalLine';    
interface ComponentProps {
text: string
}

const GenericHeaderModule: React.FC<ComponentProps> = ({text}) => {
  return (
    <>
    <div className='mt-2 mb-3'>
        <GenericHR />
        <h1 className='py-2'>{text}</h1>
        <GenericHR />

    </div>
    </>
  );
};

export default GenericHeaderModule;

