

import { CldUploadWidget } from 'next-cloudinary';

export default function SocioPhoto() {

<CldUploadWidget uploadPreset="<socios>">
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
}