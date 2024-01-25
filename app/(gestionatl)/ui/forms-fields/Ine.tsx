import { CldUploadWidget } from 'next-cloudinary';

import { useFormContext } from 'react-hook-form';

const InePhoto: React.FC = () => {
  const { register, setValue } = useFormContext();
  
  function onImageUploadSuccess(result: any) {
    const url = result.info.secure_url;
    setValue('urlSocioIne', url);
  }

  return (
    <div>
      <CldUploadWidget uploadPreset="socioine" onSuccess={onImageUploadSuccess}>
        {({ open }) => {
          return (
            <button className="btn bg-amber-500" onClick={() => open()}>
              Fotografía Identificación Socio
            </button>
          );
        }}
      </CldUploadWidget>
      <input {...register('urlSocioIne')}type="text" id="urlSocioIne" hidden readOnly />
    </div>
  );
}

  export default InePhoto;