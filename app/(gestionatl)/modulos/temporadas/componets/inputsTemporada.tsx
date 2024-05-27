import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../../ui/forms-fields/errorComponent';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const camposFormularioTemporada = [{
    label: "Datos Temporada",
    fields: [
        { label: "Temporada", name: "Temporada", type: "input" },
        { label: "Fecha de Incio", name: "fechaInicioTemporada", type: "date" },
        { label: "Fecha de Finalización", name: "fechaFinTemporada", type: "date" },
        
    ],
}]

const InputsFormularioTemporada: React.FC = () => {
    const [ dateStart, setDateStart ] = React.useState<Date | null | undefined>(null)
    console.log(dateStart)
    const {
        register,
        formState: { errors },
    } = useFormContext();
    
    return (
        <>
            {camposFormularioTemporada.map((fieldset, index) => (
                <fieldset key={index} className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
                    <legend className='text-center font-extrabold text-xl'>{fieldset.label}</legend>
                   { fieldset.fields.map((field, fieldIndex) => (
                        <div key={fieldIndex} className='mb-4'>
                            <label htmlFor={field.name} className='block text-sm font-medium text-gray-700'>{field.label}</label>
                            <input
                            {...register(field.name)}
                            id={field.name}
                            placeholder={field.label}
                            type={field.type}
                            className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                                                    />                     
                            <ErrorMessage error={errors[field.name]} />
                        </div>
                    ))}
                    <ReactDatePicker onChange={setDateStart} />
                    
                </fieldset>
            ))}
        </>
    ) 
}

export default InputsFormularioTemporada;