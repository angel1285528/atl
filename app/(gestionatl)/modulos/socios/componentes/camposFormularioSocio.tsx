import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../../ui/forms-fields/errorComponent';
import SocioPhoto from '../../../ui/forms-fields/photo';
import InePhoto from '../../../ui/forms-fields/Ine';
import ComprobanteDeDomicilio from '../../../ui/forms-fields/comprobanteDeDomicilio';

const formFields = [

    {
      label: 'Nombre y Apellidos',
      fields: [
        {label: "Curp", name: "id", type: "text"},
        { label: 'Apellido Paterno', name: 'lastName', type: 'text' },
        { label: 'Apellido Materno', name: 'secondLastName', type: 'text' },
        { label: 'Nombre', name: 'firstName', type: 'text' }
      ]
    },
    {
      label: 'Dirección',
      fields: [
        { label: 'Calle', name: 'street', type: 'text' },
        { label: 'Número Exterior', name: 'streetNumber', type: 'text' },
        { label: 'Colonia', name: 'colonia', type: 'text' },
        { label: 'Código Postal', name: 'postalCode', type: 'text' },
        { label: 'Ciudad', name: 'city', type: 'text' },
        { label: 'Estado', name: 'state', type: 'text' }
      ]
    },
    {
      label: 'Contacto',
      fields: [
        { label: 'Teléfono', name: 'phoneNumber', type: 'text' },
        { label: 'Correo Electrónico', name: 'email', type: 'email' }
      ]
    }
  ];
  
  const InputsFormularioSocio: React.FC = () => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    return (
      <div>
        <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Fotografía del Socio</legend>
          <div className='mb-4 text-center btn btn-primary bg-amber-400 text-white w-1/2 my-6 mx-auto'>
            <SocioPhoto />   
          </div>
        </fieldset>
        {formFields.map((fieldset, index) => (
          <fieldset key={index} className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
            <legend className='text-center font-extrabold text-xl'>{fieldset.label}</legend>
            {fieldset.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className='mb-4'>
                <label htmlFor={field.name} className='block text-sm font-medium text-gray-700'>{field.label}</label>
                <input {...register(field.name)} id={field.name} placeholder={field.label} type={field.type} className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500' />
                <ErrorMessage error={errors[field.name]} />
              </div>
            ))}
          </fieldset>
        ))}
        {/* Componente select fuera de la función map */}
        <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Papelería del Socio</legend>
          <div className='mb-4 text-center btn btn-primary bg-amber-400 text-white w-1/2 my-6 mx-auto'>
            <InePhoto />   
          </div>
          <div className='mb-4 text-center btn btn-primary bg-amber-400 text-white w-1/2 my-6 mx-auto'>
            <ComprobanteDeDomicilio />   
          </div>
        </fieldset>
        <fieldset key="periodoDePago" className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Periodo de Pago</legend>
          <div className='mb-4'>
            <label htmlFor="periodoDePago" className='block text-sm font-medium text-gray-700'>Periodo de Pago</label>
            <select {...register("periodoDePago")} id="periodoDePago" className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
              <option value="periodo1">Del día 1 al 10 de cada mes</option>
              <option value="periodo2">Del día 11 al 20 de cada mes</option>
              <option value="periodo3">Del día 21 al último de cada mes</option>
            </select>
          </div>
        </fieldset>      
      </div>
    );
  };
  
  
  export default InputsFormularioSocio;
