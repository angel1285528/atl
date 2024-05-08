import { Role, StatusSocios, } from "@prisma/client";



export interface interfaceSocio {
  id: string;
  firstName: string;
  lastName: string;
  secondLastName?: string | null;
  street: string;
  streetNumber: string;
  colonia: string;
  postalCode: string;
  city: string;
  state: string;
  phoneNumber: string;
  email: string;
  urlSocioPhoto?: string | null;
  urlSocioIne?: string | null;
  urlIdDomicilio?: string | null;
  rol: Role;
  status: StatusSocios;
  fechaRegistro: Date;
  periodoDePago: String;

}

export interface interfaceFamiliares {
  familyId: string;
  familyFirstName: string;
  familyLastName: string;
  familySecondLastName?: string | null;
  familyPhoneNumber: string;
  familyEmail?: string | null;
  familyRelationship: string;
  socioId: string;
}

