import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useFormContext } from 'react-hook-form';

const ComprobanteDeDomicilio: React.FC = () => {
  const { setValue, register } = useFormContext();
  
  function onImageUploadSuccess(result: any) {
    const url = result.info.secure_url;
    setValue('urlIdDomicilio', url);
  }

  return (
    <div>
      <CldUploadWidget uploadPreset="comprobanteDomicilio" onSuccess={onImageUploadSuccess}>
        {({ open }) => (
          <button className="btn bg-amber-500" onClick={() => open()}>
            Fotografía Comprobante de Domicilio 
          </button>
        )}
      </CldUploadWidget>
      <input {...register('urlIdDomicilio')} id="urlIdDomicilio" type="text" hidden readOnly />
    </div>
  );
}

export default ComprobanteDeDomicilio;
