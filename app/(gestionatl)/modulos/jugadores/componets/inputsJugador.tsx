import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '@/app/(gestionatl)/ui/forms-fields/errorComponent';
import PlayerPhoto from '../ui/formularios/form-fields-player/playerPhoto';
import Calendario from './calendario';

const getCurrentYearRange = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 17 }, (_, i) => currentYear - i);
};

const formFields = [
  {
    label: 'Nombre y Apellidos',
    fields: [
      { label: "Curp", name: "playerId", type: "text" },
      { label: 'Nombre', name: 'playerFirstName', type: 'text' },
      { label: 'Apellido Paterno', name: 'playerLastName', type: 'text' },
      { label: 'Apellido Materno', name: 'playerSecondLastName', type: 'text' }
    ]
  },
  {
    label: 'Datos de Nacimiento',
    fields: [
      {label: "Fecha de nacimiento", name:"fechaNacimiento", type:"date"},
      { label: 'Categoría', name: 'categoria', type: 'select', options: getCurrentYearRange() },
      { label: 'Rama', name: 'rama', type: 'select', options: ['Varonil', 'Femenil'] },
      { label: 'País de Nacimiento', name: 'paisNacimiento', type: 'select', options: ["México", "Nacido en el extranjero"] },
      { label: 'Estado de Nacimiento', name: 'estadoNacimiento', type: 'text' },
      { label: 'Ciudad de Nacimiento', name: 'ciudadNacimiento', type: 'text' },
    ]
  },
  {
    label: "Datos Escolares",
    fields: [
      { label: "Nivel Escolar", name: "schoolarLevel", type: "select", options: ["Guardería", "Preescolar", "Primaria", "Secundaria", "Media Superior o +"] },
      { label: "Grado Escolar", name: "schoolarGrade", type: "text" },
      { label: "Escuela", name: "school", type: "text" },
    ]
  },
  {
    label: 'Contacto',
    fields: [
      { label: 'Teléfono', name: 'playerCellPhone', type: 'text' },
      { label: 'Correo Electrónico', name: 'playerEmail', type: 'email' }
    ]
  }
];

const estadosMexico = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de México',
  'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Estado de México', 'Michoacán', 
  'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa',
  'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
];

const gradosEscolares: { [key: string]: string[] } = {
  Guardería: ['Guardería'],
  Preescolar: ['1ero', '2do', '3er Grado'],
  Primaria: ['1er Grado', '2do Grado', '3er Grado', '4to Grado', '5to Grado', '6to Grado'],
  Secundaria: ['1er Grado', '2do Grado', '3er Grado'],
  'Media Superior o +': ['Bachillerato o +']
};

const InputsFormularioJugador: React.FC = () => {
  const { register, formState: { errors }, watch } = useFormContext();
  const paisNacimiento = watch('paisNacimiento');
  const nivelEscolar = watch('schoolarLevel');

  return (
    <div>
      <fieldset className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
        <legend className='text-center font-extrabold text-xl'>Fotografía del Jugador</legend>
        <div className='mb-4 text-center btn btn-primary bg-amber-400 text-white w-1/2 my-6 mx-auto'>
          <PlayerPhoto />
        </div>
      </fieldset>
      {formFields.map((fieldset, index) => (
        <fieldset key={index} className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className='text-center font-extrabold text-xl'>{fieldset.label}</legend>
          {fieldset.fields.map((field, fieldIndex) => (
            <div key={fieldIndex} className='mb-4'>
              <label htmlFor={field.name} className='block text-sm font-medium text-gray-700'>{field.label}</label>
              {field.type === 'select' ? (
                <select
                  {...register(field.name, { required: true })}
                  id={field.name}
                  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                >
                  {field.options?.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.name === 'estadoNacimiento' && paisNacimiento === 'México' ? (
                <select
                  {...register(field.name, { required: true })}
                  id={field.name}
                  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                >
                  {estadosMexico.map(estado => (
                    <option key={estado} value={estado}>{estado}</option>
                  ))}
                </select>
              ) : field.name === 'estadoNacimiento' && paisNacimiento === 'Nacido en el extranjero' ? (
                <select
                  {...register(field.name, { required: true })}
                  id={field.name}
                  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                >
                  <option value="Nacido en el extranjero">Nacido en el extranjero</option>
                </select>
              ) : field.name === 'schoolarGrade' && nivelEscolar ? (
                <select
                  {...register(field.name, { required: true })}
                  id={field.name}
                  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                >
                  {gradosEscolares[nivelEscolar]?.map(grado => (
                    <option key={grado} value={grado}>{grado}</option>
                  ))}
                </select>
              ) : field.type === 'date' ? (
                <Calendario value={field.name} />
              ) : (
                <input
                  {...register(field.name, { required: true })}
                  id={field.name}
                  placeholder={field.label}
                  type={field.type}
                  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                />
              )}
              <ErrorMessage error={errors[field.name]} />
            </div>
          ))}
        </fieldset>
      ))}

    </div>
  );
};

export default InputsFormularioJugador;
