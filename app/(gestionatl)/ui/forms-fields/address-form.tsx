/*import React, { useEffect } from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { FormData } from '@/app/lib/zSchema';

interface AddressProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
}

const Address: React.FC<AddressProps> = ({ register, errors, setValue }) => {
    useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCtOw6VSojDUVBs2P35at-AR9lqm4ZP08M&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        initAutocomplete();
      };
    };

    const initAutocomplete = () => {
      const mapElement = document.getElementById('gmp-map');
      if (!mapElement) {
        console.error('Elemento del mapa no encontrado');
        return;
      }
      const mapOptions = {
        center: { lat: 24.8567, lng: -99.5675 }, // Coordenadas para Linares, Nuevo León
        zoom: 8,
        mapTypeId: 'roadmap',
      };

      const map = new window.google.maps.Map(mapElement, mapOptions);

      const locationInputElement = document.getElementById('location-input');
      if (!locationInputElement || !(locationInputElement instanceof HTMLInputElement)) {
        console.error('Elemento de entrada de ubicación no encontrado o no es un HTMLInputElement');
        return;
      }
    
      const autocomplete = new window.google.maps.places.Autocomplete(locationInputElement);

      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }

        fillInAddress(place);
      });
    };

    const fillInAddress = (place: google.maps.places.PlaceResult) => {
      if (!place.address_components) {
        console.error('Componentes de la dirección no disponibles.');
        return;
      }
      const addressComponents = place.address_components;
      addressComponents.forEach(component => {
        component.types.forEach(type => {
          let input: HTMLInputElement | null;
          switch (type) {
            case 'street_number':
              input = document.getElementById('street_number') as HTMLInputElement;
              break;
            case 'route':
              input = document.getElementById('route-input') as HTMLInputElement;
              break;
            case 'city':
              input = document.getElementById('city') as HTMLInputElement;
              break;
            case 'administrativeArea':
              input = document.getElementById('administrativeArea') as HTMLInputElement;
              break;
            case 'country':
              input = document.getElementById('country') as HTMLInputElement;
              break;
            case 'postal_code':
              input = document.getElementById('postal_code') as HTMLInputElement;
              break;
            default:
              return;
          }

      if (input && input instanceof HTMLInputElement) {
        input.value = component.long_name;
      }
        });
      });
    };

    loadGoogleMapsScript();
  }, []);

 
  
  return (
 <div className="card-container">
      <div className="panel">
      <label htmlFor="street">Dirección</label> <br />
        <input {...register("street")} type="text" name="street" placeholder="Calle" id="street" className="input input-bordered input-info w-full max-w-xs" />

        <label htmlFor="street_number">Número</label> <br />
        <input {...register("street_number")} type="text" name="street_number" placeholder="Número" id="street_number" className="input input-bordered input-info w-full max-w-xs" />

        <label htmlFor="street_number">Ciudad</label> <br />
        <input {...register("city")} type='text' name='city' placeholder="Ciudad" id="city" className="input input-bordered input-info w-full max-w-xs" />
        <div className="half-input-container">
        <label htmlFor="state">Estado</label> <br />
          <input {...register("administrativeArea")} type="text" name="administrativeArea" id="administrativeArea" className="half-input input input-bordered input-info w-full max-w-xs" placeholder="Estado"  readOnly/>
          <label htmlFor="state">Código Postal</label> <br />
<input {...register("postalCode")} id="postalCode" name="postalCode" type="text" className="half-input input input-bordered input-info w-full max-w-xs" placeholder="Codigo Postal" id="postal_code-input" readOnly/>
</div>
<input {...register("country")}type="text" placeholder="Pais" name='country' id="country" className="input input-bordered input-info w-full max-w-xs" readOnly/>
</div>
<div className="map w-32 h-32" id="gmp-map" ></div>

  </div>

)
  
}
  
    export default Address; */