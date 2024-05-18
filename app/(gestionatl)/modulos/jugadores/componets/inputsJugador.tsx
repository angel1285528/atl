import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '@/app/(gestionatl)/ui/forms-fields/errorComponent';
import PlayerPhoto from '../ui/formularios/form-fields-player/playerPhoto';
import Calendario from './calendario';


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
      { label: 'Categoría', name: 'categoria', type: 'text' },
      { label: 'rama', name: 'rama', type: 'text' },
      { label: 'Fecha de Nacimiento', name: 'fechaNacimiento', type: 'date' },
      // { label: 'Lugar de Nacimiento', name: 'lugarNacimiento', type: 'text' },
    ]
  },
  // {
  //     label: "Datos Escolares",
  //     fields: [
  //       { label: "Nivel Escolar", name: "schoolarLevel", type: "text"},  
  //       { label: "Escuela", name: "school", type: "text"},
  //         {label: "Grado Escolar", name:"schoolarGrade", type:"text"}
  //     ]
  // },
  {
    label: 'Contacto',
    fields: [
      { label: 'Teléfono', name: 'playerCellPhone', type: 'text' },
      { label: 'Correo Electrónico', name: 'playerEmail', type: 'email' }
    ]
  }
];


const InputsFormularioJugador: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [fechaNacimiento, setFechaNacimiento] = useState<Date | null>(null);
  const handleFechaNacimientoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(handleFechaNacimientoChange)
    const fechaSeleccionada = new Date(event.target.value);
    console.log(fechaSeleccionada)
    const fechaISO = fechaSeleccionada.toISOString();
    console.log(fechaISO)
    setFechaNacimiento(fechaSeleccionada);
    //console.log(setFechaNacimiento)
  };
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
              {field.type === 'date' ? (
                <>
                <Calendario />
      
                </>
              ) : (
                <input
                  {...register(field.name)}
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