import React, { useState } from "react";
import Image from "next/image";
import { CldUploadWidget } from 'next-cloudinary';
import { EditIcon } from "lucide-react";

interface AvatarATLProps {
  urlPhoto: string;
  entityId: string;
  entityType: 'jugador' | 'socio';
  updatePhotoFunction: (data: { entityId: string; PhotoUrl: string }) => Promise<any>;
  sizeButton: string | number;
  wide: string;
  height: string;
}

const AvatarATL: React.FC<AvatarATLProps> = ({ urlPhoto, wide, height, entityId, entityType, updatePhotoFunction, sizeButton }) => {
  const [photoUrl, setPhotoUrl] = useState(urlPhoto);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUploadSuccess = async (result: any) => {
    const url = result.info.secure_url;
    await updatePhotoFunction({ entityId, PhotoUrl: url });
    setPhotoUrl(url);
    setIsEditing(false);
  };

  return (
    <div className={`relative ${wide} ${height}  rounded-full overflow-hidden"`} style={{ background: 'linear-gradient(to right, #1E3A8A 50%, #FBBF24 50%)' }}>
      <Image
        src={photoUrl || '/images/avatar.png'}
        alt="Foto"
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 rounded-full'
      />
      <button
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-400 bg-opacity-30 text-white rounded-full p-2"
        onClick={() => setIsEditing(true)}
      >
        <EditIcon size={sizeButton} />
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
