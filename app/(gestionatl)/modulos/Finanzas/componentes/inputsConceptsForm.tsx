import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TipoConcepto } from '@prisma/client';

interface Field {
  label: string;
  name: string;
  type: string;
  options?: { value: string; label: string }[];
}

const formFields: { label: string; fields: Field[] }[] = [
  {
    label: 'Concepto',
    fields: [
      { label: 'Concepto', name: 'concepto', type: 'text' },
    ]
  },
  {
    label: 'Tipo de Concepto',
    fields: [
      { label: 'Tipo de Concepto', name: 'tipoConcepto', type: 'select', options: Object.values(TipoConcepto).map((tipo) => ({ value: tipo, label: tipo })) },
    ]
  }
];

const FormInputConceptos: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      {formFields.map((fieldset, index) => (
        <fieldset key={index} className="rounded border-t-4 border-solid border-amber-500 mt-6 mx-4 md:mx-auto max-w-4xl">
          <legend className="text-lg font-medium">{fieldset.label}</legend>
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
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  {...register(field.name, { required: true })}
                  id={field.name}
                  type={field.type}
                  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                />
              )}
              {errors[field.name] && <span className='text-red-600 text-sm'>{(errors[field.name]?.message as string) || ''}</span>}
            </div>
          ))}
        </fieldset>
      ))}
    </div>
  );
};

export default FormInputConceptos;
