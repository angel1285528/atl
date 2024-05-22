import React, { useState } from "react";
import Image from "next/image";
import { CldUploadWidget } from 'next-cloudinary';

interface AvatarATLProps {
  urlPhoto: string;
  entityId: string;
  entityType: 'jugador' | 'socio';
  updatePhotoFunction: (data: { entityId: string; PhotoUrl: string }) => Promise<any>;
}

const AvatarATL: React.FC<AvatarATLProps> = ({ urlPhoto, entityId, entityType, updatePhotoFunction }) => {
  const [photoUrl, setPhotoUrl] = useState(urlPhoto);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUploadSuccess = async (result: any) => {
    const url = result.info.secure_url;
    await updatePhotoFunction({ entityId, PhotoUrl: url });
    setPhotoUrl(url);
    setIsEditing(false);
  };

  return (
    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden" style={{ background: 'linear-gradient(to right, #1E3A8A 50%, #FBBF24 50%)' }}>
      <Image
        src={photoUrl || '/images/avatar.png'}
        alt="Foto"
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 rounded-full'
      />
      <button
        className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-2"
        onClick={() => setIsEditing(true)}
      >
        +
      </button>
      {isEditing && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
          <CldUploadWidget uploadPreset="player" onSuccess={handleImageUploadSuccess}>
            {({ open }) => (
              <button className="bg-green-600 text-white p-2 rounded" onClick={() => open()}>
                Agregar o modificar Foto
              </button>
            )}
          </CldUploadWidget>
          <button className="mt-2 bg-red-600 text-white p-2 rounded" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarATL;
