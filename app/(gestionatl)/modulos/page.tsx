import React from 'react';
import Dashboard from './components/dashboard';
import GenericHeaderModule from '@/components/ui/genericModulHeader';
export const  dynamic = 'force-dynamic';


const Page: React.FC = async () => {
    
    return (
        <>
            <section className='m-4'>
             <GenericHeaderModule text='Dashboard ATL' />
             <Dashboard />
            </section>    

            
        </>
    );
}

export default Page;
