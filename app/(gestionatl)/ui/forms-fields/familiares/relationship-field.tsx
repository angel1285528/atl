'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';



const RelationshipsFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div className='w-full flex flex-col my-4'>
      
      <label htmlFor="familyRelationship" className='font-bold mb-2'>Parentezco:</label>
      <select {...register('familyRelationship')} defaultValue="" id='familyRelationship' className="input input-bordered input-info w-full">
        <option value="" disabled>Seleccione el parentesco</option>
        <option value="Padre">Padre</option>
        <option value="Madre">Madre</option>
        <option value="Hermano">Hermano</option>
        <option value="Tio">Tío</option>
        <option value="Abuelo">Abuelo</option>
        <option value="Otro">Otro</option>
      </select>
        </div>
      

    
    );
  };  
  export default RelationshipsFields;

