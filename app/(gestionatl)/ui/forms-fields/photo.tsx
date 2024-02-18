import { CldUploadWidget } from 'next-cloudinary';
import { useFormContext } from 'react-hook-form';

const SocioPhoto: React.FC = () => {
  const { register, setValue } = useFormContext();
  
  function onImageUploadSuccess(result: any) {
    const url = result.info.secure_url;
    setValue('urlSocioPhoto', url);
  }

  return (
    <div>
      <CldUploadWidget uploadPreset="socios" onSuccess={onImageUploadSuccess}>
        {({ open }) => (
          <button className="btn bg-amber-500" onClick={() => open()}>
            Tomar o subir fotografía
          </button>
        )}
      </CldUploadWidget>
      <input {...register('urlSocioPhoto')} id="urlSocioPhoto" type="text" readOnly hidden/>
    </div>
  );
}

export default SocioPhoto;
