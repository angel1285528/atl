import  { Role as PrismaRole } from "c:/Users/ANGEL/Dropbox/Soy programador/atl/node_modules/.prisma/client/index";
import { StatusSocios as PrismaStatusSocios } from "c:/Users/ANGEL/Dropbox/Soy programador/atl/node_modules/.prisma/client/index";

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
  rol: PrismaRole;
  status: PrismaStatusSocios;
  fechaRegistro: Date;

}


enum Role {
  socio,
  jugador,
  entrenador,
  admin
}

enum StatusSocios {
  Activo,
  Ausente,
  Ianctivo
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

