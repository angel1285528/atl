import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

type FormData = {
  paisNacimiento: string;
  estadoNacimiento: string;
  ciudadNacimiento?: string |null | undefined;
};

const BirthForm: React.FC = () => {
  const { register, control } = useFormContext<FormData>();
  const [isForeignBorn, setIsForeignBorn] = useState<boolean>(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setIsForeignBorn(selectedCountry !== 'Mexico');
  };

  return (
    <>
      <div>
        <div>
        <label>País:</label>
        <select {...register("paisNacimiento")} onChange={handleCountryChange}>
          <option value="Mexico">México</option>
          <option value="Foreign">Nacido en el extranjero</option>
        </select>
        <p>Si el jugador es nacido en el extranjero, no se registra el estado</p>
      </div>
      {!isForeignBorn && (
          <div>
          <label>Estado:</label>
          <select {...register("estadoNacimiento")} defaultValue={"Nuevo León"}>
          <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Coahuila">Coahuila</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="Estado de México">Estado de México</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Michoacán">Michoacán</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Puebla">Puebla</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana Roo">Quintana Roo</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tlaxcala">Tlaxcala</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
            
          </select>
        </div> 
      )}
      <div>
        <label>Ciudad:</label>
        <input type="text" {...register("ciudadNacimiento")} />
      </div>
      </div>
      </>
      );
};

export default BirthForm;
