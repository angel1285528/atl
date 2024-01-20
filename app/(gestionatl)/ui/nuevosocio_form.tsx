'use client'
import React, { useState } from 'react';
import { useForm, FormProvider, Form } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { zSchema } from '@/app/lib/zSchema';
import { TypeOf } from 'zod';
import NameInputComponent from '@/app/(gestionatl)/ui/forms-fields/name-fields';
import Address from '@/app/(gestionatl)/ui/forms-fields/address-form'
import ContactComponent from './forms-fields/contact-fields';
import { CldUploadWidget } from 'next-cloudinary';
import { createSocio } from '@/app/lib/newSocio';

type FormData = TypeOf<typeof zSchema>;



const NewSocioForm = () => {
  const methods = useForm({
    resolver: zodResolver(zSchema), // Asegúrate de que esto coincide con tu esquema
  });

  const onSubmit = async (data: FormData) => {
    
    try {
      await createSocio(data);
      console.log(data)
    } catch (error) {
      // Manejar errores aquí
      console.error(error);
    }
  }

  return (
    <>
      <FormProvider {...methods}>

        <form onSubmit={methods.handleSubmit(onSubmit)} className='text-black'>
          <fieldset>
            <legend>Nombres y Apellidos</legend>
            <NameInputComponent 
                register={methods.register}
                errors={methods.formState.errors}
                setValue={methods.setValue}
            />
          </fieldset>
          <fieldset>
            <legend>Dirección:</legend>
            <Address
              register={methods.register}
              errors={methods.formState.errors}
              setValue={methods.setValue}
            />
          </fieldset>
          <fieldset>
            <legend>Datos de contacto:</legend>
            <ContactComponent />
          </fieldset>
          <fieldset>
            <legend>Referencias personales</legend>
            <label htmlFor="work">Ocupacion</label> <br />
            <input type="text" id='work' className='input input-bordered input-info w-full max-w-xs' /> <br />
            <label htmlFor="scholarity">Escolaridad Máxima</label> <br />
            <select id="scholarity" className="input input-bordered input-info w-full max-w-xs">
              <option value="Primaria">Primaria</option>
              <option value="Secundaria" selected>Secundaria</option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Licenciatura">Licenciatura</option>
              <option value="Maestría">Maestría</option>
              <option value="Doctorado">Doctorado</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Fecha de Ingreso</legend>
            <input type="month" id="fechaIngreso" min="2021-10" className="input input-bordered input-info w-full max-w-xs" />
          </fieldset>
          <fieldset>
            <legend>fotografia</legend>
            <CldUploadWidget uploadPreset="socios">
              {({ open }) => {
                return (
                  <button className="input input-bordered input-info w-full max-w-xs" onClick={() => open()}>
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>


          </fieldset>

          <button className="btn" type='submit'>Registrar Socio</button>

        </form>
      </FormProvider>
    </>

  );
};

export default NewSocioForm;

