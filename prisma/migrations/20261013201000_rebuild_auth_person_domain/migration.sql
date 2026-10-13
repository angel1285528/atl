-- CreateEnum
CREATE TYPE "EstadoOrganizacion" AS ENUM ('ACTIVA', 'SUSPENDIDA', 'INACTIVA');

-- CreateEnum
CREATE TYPE "RolMembresia" AS ENUM ('ADMIN', 'ENTRENADOR', 'AUXILIAR', 'TUTOR', 'JUGADOR');

-- CreateEnum
CREATE TYPE "EstadoMembresia" AS ENUM ('INVITADA', 'ACTIVA', 'SUSPENDIDA', 'REVOCADA');

-- CreateEnum
CREATE TYPE "EstadoPersona" AS ENUM ('ACTIVA', 'INACTIVA', 'BLOQUEADA');

-- CreateEnum
CREATE TYPE "TipoContacto" AS ENUM ('PERSONAL', 'TRABAJO', 'CASA', 'MOVIL', 'EMERGENCIA', 'OTRO');

-- CreateEnum
CREATE TYPE "TipoDireccion" AS ENUM ('CASA', 'TRABAJO', 'FISCAL', 'OTRO');

-- CreateEnum
CREATE TYPE "FuenteDireccion" AS ENUM ('MANUAL', 'GOOGLE_PLACES', 'GOOGLE_ADDRESS_VALIDATION');

-- CreateEnum
CREATE TYPE "EstadoFamilia" AS ENUM ('ACTIVA', 'INACTIVA', 'ARCHIVADA');

-- CreateEnum
CREATE TYPE "TipoMiembroFamilia" AS ENUM ('SOCIO', 'TUTOR', 'JUGADOR', 'CONTACTO_AUTORIZADO', 'OTRO');

-- CreateEnum
CREATE TYPE "EstadoSocio" AS ENUM ('ACTIVO', 'SUSPENDIDO', 'BAJA');

-- CreateEnum
CREATE TYPE "TipoSocio" AS ENUM ('REGULAR', 'HONORARIO', 'BECADO');

-- CreateEnum
CREATE TYPE "EstadoJugador" AS ENUM ('ACTIVO', 'AUSENTE', 'BAJA', 'LESIONADO', 'VETADO');

-- CreateEnum
CREATE TYPE "EstadoLaboral" AS ENUM ('ACTIVO', 'LICENCIA', 'SUSPENDIDO', 'BAJA');
-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" TEXT,
    "banned" BOOLEAN DEFAULT false,
    "banReason" TEXT,
    "banExpires" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,
    "impersonatedBy" TEXT,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rateLimit" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "lastRequest" BIGINT NOT NULL,

    CONSTRAINT "rateLimit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizaciones" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "estado" "EstadoOrganizacion" NOT NULL DEFAULT 'ACTIVA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membresias" (
    "id" TEXT NOT NULL,
    "organizacionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "personaId" TEXT,
    "rol" "RolMembresia" NOT NULL,
    "estado" "EstadoMembresia" NOT NULL DEFAULT 'ACTIVA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "membresias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personas" (
    "id" TEXT NOT NULL,
    "organizacionId" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidoPaterno" TEXT,
    "apellidoMaterno" TEXT,
    "fechaNacimiento" DATE,
    "sexo" TEXT,
    "nacionalidad" TEXT,
    "curpCifrada" TEXT,
    "curpBusquedaHash" TEXT,
    "estado" "EstadoPersona" NOT NULL DEFAULT 'ACTIVA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persona_telefonos" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "tipo" "TipoContacto" NOT NULL DEFAULT 'MOVIL',
    "codigoPais" TEXT NOT NULL DEFAULT '+52',
    "numero" TEXT NOT NULL,
    "extension" TEXT,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "verificado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "persona_telefonos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persona_emails" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "tipo" "TipoContacto" NOT NULL DEFAULT 'PERSONAL',
    "email" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "verificado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "persona_emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "direcciones" (
    "id" TEXT NOT NULL,
    "organizacionId" TEXT NOT NULL,
    "googlePlaceId" TEXT,
    "direccionFormateada" TEXT,
    "regionCode" TEXT NOT NULL DEFAULT 'MX',
    "languageCode" TEXT DEFAULT 'es-MX',
    "codigoPostal" TEXT,
    "areaAdministrativa" TEXT,
    "localidad" TEXT,
    "sublocalidad" TEXT,
    "lineaDireccion1" TEXT NOT NULL,
    "lineaDireccion2" TEXT,
    "latitud" DECIMAL(10,7),
    "longitud" DECIMAL(10,7),
    "plusCode" TEXT,
    "fuente" "FuenteDireccion" NOT NULL DEFAULT 'MANUAL',
    "validadaAt" TIMESTAMP(3),
    "googleFetchedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "direcciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persona_direcciones" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "direccionId" TEXT NOT NULL,
    "tipo" "TipoDireccion" NOT NULL DEFAULT 'CASA',
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "fechaInicio" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" DATE,

    CONSTRAINT "persona_direcciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familias" (
    "id" TEXT NOT NULL,
    "organizacionId" TEXT NOT NULL,
    "codigoFamilia" TEXT NOT NULL,
    "nombreFamilia" TEXT NOT NULL,
    "estado" "EstadoFamilia" NOT NULL DEFAULT 'ACTIVA',
    "fechaRegistro" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observaciones" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "familias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familia_miembros" (
    "id" TEXT NOT NULL,
    "familiaId" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "tipoMiembro" "TipoMiembroFamilia" NOT NULL,
    "parentesco" TEXT,
    "esTutorLegal" BOOLEAN NOT NULL DEFAULT false,
    "esResponsablePrincipal" BOOLEAN NOT NULL DEFAULT false,
    "esResponsableFinanciero" BOOLEAN NOT NULL DEFAULT false,
    "autorizadoRecoger" BOOLEAN NOT NULL DEFAULT false,
    "autorizadoEmergencias" BOOLEAN NOT NULL DEFAULT false,
    "recibeNotificaciones" BOOLEAN NOT NULL DEFAULT false,
    "fechaInicio" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" DATE,

    CONSTRAINT "familia_miembros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "familia_direcciones" (
    "id" TEXT NOT NULL,
    "familiaId" TEXT NOT NULL,
    "direccionId" TEXT NOT NULL,
    "tipo" "TipoDireccion" NOT NULL DEFAULT 'CASA',
    "principal" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "familia_direcciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socios_nuevo" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "numeroSocio" TEXT NOT NULL,
    "fechaAlta" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaBaja" DATE,
    "estado" "EstadoSocio" NOT NULL DEFAULT 'ACTIVO',
    "tipo" "TipoSocio" NOT NULL DEFAULT 'REGULAR',

    CONSTRAINT "socios_nuevo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jugadores_nuevo" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "numeroJugador" TEXT NOT NULL,
    "fechaIngreso" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estadoDeportivo" "EstadoJugador" NOT NULL DEFAULT 'ACTIVO',
    "posicion" TEXT,
    "dorsal" INTEGER,

    CONSTRAINT "jugadores_nuevo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entrenadores_nuevo" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "numeroEmpleado" TEXT NOT NULL,
    "especialidad" TEXT,
    "numeroCertificacion" TEXT,
    "vigenciaCertificacion" DATE,
    "estadoLaboral" "EstadoLaboral" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "entrenadores_nuevo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auxiliares" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "numeroEmpleado" TEXT NOT NULL,
    "tipoAuxiliar" TEXT,
    "estadoLaboral" "EstadoLaboral" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "auxiliares_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "rateLimit_key_key" ON "rateLimit"("key");

-- CreateIndex
CREATE UNIQUE INDEX "organizaciones_slug_key" ON "organizaciones"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "membresias_personaId_key" ON "membresias"("personaId");

-- CreateIndex
CREATE INDEX "membresias_organizacionId_rol_idx" ON "membresias"("organizacionId", "rol");

-- CreateIndex
CREATE UNIQUE INDEX "membresias_organizacionId_userId_key" ON "membresias"("organizacionId", "userId");

-- CreateIndex
CREATE INDEX "personas_organizacionId_apellidoPaterno_apellidoMaterno_nom_idx" ON "personas"("organizacionId", "apellidoPaterno", "apellidoMaterno", "nombres");

-- CreateIndex
CREATE UNIQUE INDEX "personas_organizacionId_curpBusquedaHash_key" ON "personas"("organizacionId", "curpBusquedaHash");

-- CreateIndex
CREATE INDEX "persona_telefonos_personaId_principal_idx" ON "persona_telefonos"("personaId", "principal");

-- CreateIndex
CREATE UNIQUE INDEX "persona_telefonos_personaId_codigoPais_numero_key" ON "persona_telefonos"("personaId", "codigoPais", "numero");

-- CreateIndex
CREATE INDEX "persona_emails_personaId_principal_idx" ON "persona_emails"("personaId", "principal");

-- CreateIndex
CREATE UNIQUE INDEX "persona_emails_personaId_email_key" ON "persona_emails"("personaId", "email");

-- CreateIndex
CREATE INDEX "direcciones_organizacionId_googlePlaceId_idx" ON "direcciones"("organizacionId", "googlePlaceId");

-- CreateIndex
CREATE INDEX "direcciones_organizacionId_codigoPostal_idx" ON "direcciones"("organizacionId", "codigoPostal");

-- CreateIndex
CREATE INDEX "persona_direcciones_personaId_principal_idx" ON "persona_direcciones"("personaId", "principal");

-- CreateIndex
CREATE UNIQUE INDEX "persona_direcciones_personaId_direccionId_tipo_key" ON "persona_direcciones"("personaId", "direccionId", "tipo");

-- CreateIndex
CREATE INDEX "familias_organizacionId_nombreFamilia_idx" ON "familias"("organizacionId", "nombreFamilia");

-- CreateIndex
CREATE UNIQUE INDEX "familias_organizacionId_codigoFamilia_key" ON "familias"("organizacionId", "codigoFamilia");

-- CreateIndex
CREATE INDEX "familia_miembros_personaId_idx" ON "familia_miembros"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "familia_miembros_familiaId_personaId_key" ON "familia_miembros"("familiaId", "personaId");

-- CreateIndex
CREATE INDEX "familia_direcciones_familiaId_principal_idx" ON "familia_direcciones"("familiaId", "principal");

-- CreateIndex
CREATE UNIQUE INDEX "familia_direcciones_familiaId_direccionId_tipo_key" ON "familia_direcciones"("familiaId", "direccionId", "tipo");

-- CreateIndex
CREATE UNIQUE INDEX "socios_nuevo_personaId_key" ON "socios_nuevo"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "socios_nuevo_numeroSocio_key" ON "socios_nuevo"("numeroSocio");

-- CreateIndex
CREATE UNIQUE INDEX "jugadores_nuevo_personaId_key" ON "jugadores_nuevo"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "jugadores_nuevo_numeroJugador_key" ON "jugadores_nuevo"("numeroJugador");

-- CreateIndex
CREATE UNIQUE INDEX "entrenadores_nuevo_personaId_key" ON "entrenadores_nuevo"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "entrenadores_nuevo_numeroEmpleado_key" ON "entrenadores_nuevo"("numeroEmpleado");

-- CreateIndex
CREATE UNIQUE INDEX "auxiliares_personaId_key" ON "auxiliares"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "auxiliares_numeroEmpleado_key" ON "auxiliares"("numeroEmpleado");
-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membresias" ADD CONSTRAINT "membresias_organizacionId_fkey" FOREIGN KEY ("organizacionId") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membresias" ADD CONSTRAINT "membresias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membresias" ADD CONSTRAINT "membresias_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_organizacionId_fkey" FOREIGN KEY ("organizacionId") REFERENCES "organizaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "persona_telefonos" ADD CONSTRAINT "persona_telefonos_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "persona_emails" ADD CONSTRAINT "persona_emails_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direcciones" ADD CONSTRAINT "direcciones_organizacionId_fkey" FOREIGN KEY ("organizacionId") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "persona_direcciones" ADD CONSTRAINT "persona_direcciones_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "persona_direcciones" ADD CONSTRAINT "persona_direcciones_direccionId_fkey" FOREIGN KEY ("direccionId") REFERENCES "direcciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familias" ADD CONSTRAINT "familias_organizacionId_fkey" FOREIGN KEY ("organizacionId") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familia_miembros" ADD CONSTRAINT "familia_miembros_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "familias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familia_miembros" ADD CONSTRAINT "familia_miembros_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familia_direcciones" ADD CONSTRAINT "familia_direcciones_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "familias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familia_direcciones" ADD CONSTRAINT "familia_direcciones_direccionId_fkey" FOREIGN KEY ("direccionId") REFERENCES "direcciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socios_nuevo" ADD CONSTRAINT "socios_nuevo_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jugadores_nuevo" ADD CONSTRAINT "jugadores_nuevo_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entrenadores_nuevo" ADD CONSTRAINT "entrenadores_nuevo_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auxiliares" ADD CONSTRAINT "auxiliares_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "personas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
