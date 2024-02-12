import { CldUploadWidget } from 'next-cloudinary';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
const PlayerPhoto: React.FC = () => {
  const { register, setValue } = useFormContext();
  
  function onImageUploadSuccess(result: any) {
    const url = result.info.secure_url;
    setValue('playerPhoto', url);
  }

  return (
    <div>
      <CldUploadWidget uploadPreset="player" onSuccess={onImageUploadSuccess}>
        {({ open }) => {
          return (
            <Button className="btn bg-amber-500" onClick={() => open()}>
              Tomar o subir fotografía
            </Button>
          );
        }}
      </CldUploadWidget>
      <input {...register('playerPhoto')} id="PlayerPhoto" type="text" readOnly hidden/>
    </div>
  );
}

  export default PlayerPhoto;