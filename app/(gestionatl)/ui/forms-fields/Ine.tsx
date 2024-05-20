import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useFormContext } from 'react-hook-form';

const InePhoto: React.FC = () => {
  const { setValue, register } = useFormContext();
  
  function onImageUploadSuccess(result: any) {
    const url = result.info.secure_url;
    setValue('urlSocioIne', url);
  }

  return (
    <div>
      <CldUploadWidget uploadPreset="socioine" onSuccess={onImageUploadSuccess}>
        {({ open }) => (
          <button className="btn bg-amber-500" onClick={() => open()}>
            Fotografía Ine Socio
          </button>
        )}
      </CldUploadWidget>
      <input {...register('urlSocioIne')} id="urlSocioIne" type="text" hidden readOnly />
    </div>
  );
}

export default InePhoto;
