import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '@/app/(gestionatl)/ui/forms-fields/errorComponent';

const formFields = [

    {
      label: 'Nombre y Apellidos',
      fields: [
        {label: "Curp", name: "playerId", type: "text"},
        { label: 'Nombre', name: 'playerFirstName', type: 'text' },
        { label: 'Apellido Paterno', name: 'playerLastName', type: 'text' },
        { label: 'Apellido Materno', name: 'playerSecondLastName', type: 'text' }
      ]
    },
    {
      label: 'Datos de Nacimiento',
      fields: [
        { label: 'Categoría', name: 'categoria', type: 'text' },
        { label: 'Fecha de Nacimiento', name: 'fechaNacimiento', type: 'date' },
        { label: 'Lugar de Nacimiento', name: 'lugarNacimiento', type: 'text' },
      ]
    },
    {
        label: "Datos Escolares",
        fields: [
            { label: "Escuela", name: "school", type: "text"},
            {label: "Grado Escolar", name:"schoolarGrade", type:"text"}
        ]
    },
    {
      label: 'Contacto',
      fields: [
        { label: 'Teléfono', name: 'playerCellPhone', type: 'text' },
        { label: 'Correo Electrónico', name: 'playerEmail', type: 'email' }
      ]
    },
    {
        label: "Mensualidad",
        fields: [
            { label: 'Tipo de Cuota', name: 'tipoCuota', type: 'text' },
            { label: 'Importe Mensualidad', name: 'importeMensualidad', type: 'number' },    
        ]
    }
  ];
  

  const InputsFormularioJugador: React.FC = () => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    return (
      <div>
        <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Fotografía del Socio</legend>
          <div className='mb-4 text-center btn btn-primary bg-amber-400 text-white w-1/2 my-6 mx-auto'>
            {/*<SocioPhoto />   */}
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
            {/*<InePhoto />   */}
          </div>
          <div className='mb-4 text-center btn btn-primary bg-amber-400 text-white w-1/2 my-6 mx-auto'>
         {/*   <ComprobanteDeDomicilio />   */}
          </div>
        </fieldset>
        <fieldset key="periodoDePago" className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>Periodo de Pago</legend>
          <div className='mb-4'>
            <label htmlFor="periodoDePago" className='block text-sm font-medium text-gray-700'>Periodo de Pago</label>
            <select {...register("periodoDePago")} id="periodoDePago" className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
              <option value="1">Del día 1 al 10 de cada mes</option>
              <option value="2">Del día 11 al 20 de cada mes</option>
              <option value="3">Del día 21 al último de cada mes</option>
            </select>
          </div>
        </fieldset>      
      </div>
    );
  };
  
  
  export default InputsFormularioJugador;
