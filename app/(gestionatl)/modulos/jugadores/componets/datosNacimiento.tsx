import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '@/app/(gestionatl)/ui/forms-fields/errorComponent';

const LugarNacimiento: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <div id="paisNacimientoDiv">
          <label htmlFor="paisNacimiento" className="mb-2 font-extrabold">País de Nacimiento:</label>
          <input {...register("paisNacimiento")} id="paisNacimiento" className="input input-bordered input-info w-full" placeholder="País de Nacimiento" />
          <ErrorMessage error={errors.paisNacimiento} />
        </div>
        <div id="estadoNacimientoDiv">
          <label htmlFor="estadoNacimiento" className="mb-2 font-extrabold">Estado de Nacimiento:</label>
          <input {...register("estadoNacimiento")} id="estadoNacimiento" className="input input-bordered input-info w-full" placeholder="Estado de Nacimiento" />
          <ErrorMessage error={errors.estadoNacimiento} />
        </div>
      </div>
      <div id="container" className="space-y-4 md:space-y-0 md:w-3/4 mx-auto">
        <div id="ciudadNacimientoDiv" className="flex flex-col">
          <label htmlFor="ciudadNacimiento" className="mb-2 font-extrabold">Ciudad de Nacimiento:</label>
          <input {...register("ciudadNacimiento")} type='text' id="ciudadNacimiento" placeholder="Ciudad de Nacimiento" className="input input-bordered accent-input w-full" />
          <ErrorMessage error={errors.ciudadNacimiento} />
        </div>
      </div>
    </>
  );
}

export default LugarNacimiento;
