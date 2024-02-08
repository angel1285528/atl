'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';



const RelationshipsFields: React.FC = () => {
  const { register } = useFormContext();
  return (
    <div className='grid grid-cols-2 w-3/4 gap-5 mx-auto'>
      
      <label htmlFor="familyRelationship" className='ml-6'>Máximo Grado de Estudios </label>
      <select {...register('familyRelationship')} defaultValue="" id='familyRelationship' className="input input-bordered input-info w-full max-w-xs">
      <option value="" disabled>Seleccione el parentesco</option>
        <option value="Padre">Padre</option>
        <option value="Madre">Madre</option>
        <option value="Hermano">Hermano</option>
        <option value="Tio">Tio</option>
        <option value="Abuelo">Abuelo</option>
        <option value="Otro">Otro</option>
        </select>
        </div>
      

    
    );
  };  
  export default RelationshipsFields;

