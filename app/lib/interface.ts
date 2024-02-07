
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
  familyId: String;
  familyFirstName: String;
  familyLastName: String;
  familySecondLastName?: String | null;
  familyPhoneNumber: String;
  familyEmail?: String | null;
  familyRelationship: Relationship;
  socioId: string;

}

enum Relationship {
  Padre,
  Madre,
  Hermano,
  Tio,
  Abuelo,
  Otro,
}