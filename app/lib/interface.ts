import { Role, StatusSocios } from "@prisma/client";


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
  work?: string | null;
  scholarity?: string | null;
  urlSocioPhoto?: string | null;
  urlSocioIne?: string | null;
  rol: Role;
  status: StatusSocios;
  fechaRegistro: Date;

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

