enum scholarityEnum {
  primaria = "Primaria",
  secundaria = "Secundaria",
  bachillerato = "Bachillerato",
  licenciatura = "Licenciatura",
  posgrado = "Posgrado"
}

export interface SociosPageProps {
  socio: interfaceSocio[];
}
export interface interfaceSocio {
  id: string;
    firstName: string;
    lastName: string;
    secondLastName?: string | null;
    email: string;
    phoneNumber: string;
    work: string | null;
    scholarity: scholarityEnum | null;
    
  }