-- CreateEnum
CREATE TYPE "TipoClase" AS ENUM ('fut1', 'fut3', 'fut5', 'fut7', 'fut9', 'fut11');

-- CreateEnum
CREATE TYPE "EstadoJornada" AS ENUM ('Programada', 'Cancelada', 'Realizada', 'Desarrollo');

-- CreateEnum
CREATE TYPE "StatusSocios" AS ENUM ('Activo', 'Ausente', 'Baja');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('socio', 'jugador', 'entrenador', 'admin');

-- CreateEnum
CREATE TYPE "Cuota" AS ENUM ('Estandar', 'Hermano_Menor', 'Preferencial', 'Cortesia');

-- CreateEnum
CREATE TYPE "Status_Jugador" AS ENUM ('activo', 'baja', 'lesionado', 'baja_temporal');

-- CreateEnum
CREATE TYPE "periodoDePago" AS ENUM ('periodo1', 'periodo2', 'periodo3');

-- CreateTable
CREATE TABLE "JornadaEntrenamiento" (
    "idJornadaEntrenamiento" SERIAL NOT NULL,
    "fechaJornadaEntrenamiento" TIMESTAMP(3) NOT NULL,
    "horaInicioJornada" TEXT DEFAULT '18:00:00',
    "horaFinJornada" TEXT DEFAULT '20:00:00',
    "bitacoraJornada" TEXT,
    "estado" "EstadoJornada" NOT NULL DEFAULT 'Programada',
    "lugarJornada" TEXT,

    CONSTRAINT "JornadaEntrenamiento_pkey" PRIMARY KEY ("idJornadaEntrenamiento")
);

-- CreateTable
CREATE TABLE "Clases" (
    "idClase" TEXT NOT NULL,
    "tipo" "TipoClase" NOT NULL,
    "BitacoraClase" TEXT NOT NULL,

    CONSTRAINT "Clases_pkey" PRIMARY KEY ("idClase")
);

-- CreateTable
CREATE TABLE "JornadaClase" (
    "jornadaId" INTEGER NOT NULL,
    "claseId" TEXT NOT NULL,

    CONSTRAINT "JornadaClase_pkey" PRIMARY KEY ("jornadaId","claseId")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "jugadorId" TEXT NOT NULL,
    "claseId" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "asistencia" BOOLEAN NOT NULL DEFAULT false,
    "asistenciaJustificada" BOOLEAN NOT NULL DEFAULT false,
    "partidoProgramado" BOOLEAN NOT NULL DEFAULT false,
    "jornadaId" INTEGER NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Temporadas" (
    "idPeriodo" SERIAL NOT NULL,
    "Estado" BOOLEAN NOT NULL DEFAULT false,
    "Temporada" TEXT NOT NULL,
    "fechaFinTemporada" TIMESTAMP(3) NOT NULL,
    "bitacora" TEXT,
    "fechaInicioTemporada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Temporadas_pkey" PRIMARY KEY ("idPeriodo")
);

-- CreateTable
CREATE TABLE "socio" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "secondLastName" TEXT,
    "street" TEXT NOT NULL,
    "streetNumber" TEXT NOT NULL,
    "colonia" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "urlSocioPhoto" TEXT,
    "urlSocioIne" TEXT,
    "urlIdDomicilio" TEXT,
    "periodoDePago" TEXT,
    "rol" "Role" NOT NULL DEFAULT 'socio',
    "status" "StatusSocios" NOT NULL DEFAULT 'Activo',
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "socio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jugador" (
    "playerId" TEXT NOT NULL,
    "playerFechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "playerFirstName" TEXT NOT NULL,
    "playerLastName" TEXT NOT NULL,
    "playerSecondLastName" TEXT,
    "categoria" TEXT NOT NULL,
    "status" "Status_Jugador" NOT NULL DEFAULT 'activo',
    "rama" TEXT NOT NULL,
    "socioId" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "playerPhotoUrl" TEXT,
    "playerCellPhone" TEXT,
    "playerEmail" TEXT,
    "ciudadNacimiento" TEXT NOT NULL,
    "estadoNacimiento" TEXT NOT NULL,
    "paisNacimiento" TEXT NOT NULL,
    "schoolarLevel" TEXT NOT NULL,
    "schoolarGrade" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "clasesIdClase" TEXT,

    CONSTRAINT "jugador_pkey" PRIMARY KEY ("playerId")
);

-- CreateTable
CREATE TABLE "familiares" (
    "familyId" TEXT NOT NULL,
    "familyFirstName" TEXT NOT NULL,
    "familyLastName" TEXT NOT NULL,
    "familySecondLastName" TEXT,
    "familyPhoneNumber" TEXT NOT NULL,
    "familyRelationship" TEXT NOT NULL,
    "socioId" TEXT NOT NULL,

    CONSTRAINT "familiares_pkey" PRIMARY KEY ("familyId")
);

-- CreateTable
CREATE TABLE "Entrenadores" (
    "coachFirstName" TEXT NOT NULL,
    "coachLastName" TEXT NOT NULL,
    "coachSecondLastName" TEXT NOT NULL,
    "coachBirthDate" TEXT,
    "coachCellPhone" TEXT,
    "coachEmailPhone" TEXT,
    "coachId" SERIAL NOT NULL,

    CONSTRAINT "Entrenadores_pkey" PRIMARY KEY ("coachId")
);

-- CreateTable
CREATE TABLE "estadocuenta" (
    "estadoCuentaId" TEXT NOT NULL,
    "socioId" TEXT NOT NULL,
    "saldo" INTEGER NOT NULL,
    "periodoPago" "periodoDePago" NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "estadocuenta_pkey" PRIMARY KEY ("estadoCuentaId")
);

-- CreateTable
CREATE TABLE "_ClasesToEntrenadores" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Clases_idClase_key" ON "Clases"("idClase");

-- CreateIndex
CREATE UNIQUE INDEX "Asistencia_jugadorId_jornadaId_claseId_key" ON "Asistencia"("jugadorId", "jornadaId", "claseId");

-- CreateIndex
CREATE UNIQUE INDEX "Temporadas_Temporada_key" ON "Temporadas"("Temporada");

-- CreateIndex
CREATE UNIQUE INDEX "socio_id_key" ON "socio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "jugador_playerId_key" ON "jugador"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Entrenadores_coachId_key" ON "Entrenadores"("coachId");

-- CreateIndex
CREATE UNIQUE INDEX "estadocuenta_estadoCuentaId_key" ON "estadocuenta"("estadoCuentaId");

-- CreateIndex
CREATE UNIQUE INDEX "estadocuenta_socioId_key" ON "estadocuenta"("socioId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClasesToEntrenadores_AB_unique" ON "_ClasesToEntrenadores"("A", "B");

-- CreateIndex
CREATE INDEX "_ClasesToEntrenadores_B_index" ON "_ClasesToEntrenadores"("B");

-- AddForeignKey
ALTER TABLE "JornadaClase" ADD CONSTRAINT "JornadaClase_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clases"("idClase") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JornadaClase" ADD CONSTRAINT "JornadaClase_jornadaId_fkey" FOREIGN KEY ("jornadaId") REFERENCES "JornadaEntrenamiento"("idJornadaEntrenamiento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "Clases"("idClase") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_jornadaId_claseId_fkey" FOREIGN KEY ("jornadaId", "claseId") REFERENCES "JornadaClase"("jornadaId", "claseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "jugador"("playerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jugador" ADD CONSTRAINT "jugador_clasesIdClase_fkey" FOREIGN KEY ("clasesIdClase") REFERENCES "Clases"("idClase") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jugador" ADD CONSTRAINT "jugador_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "socio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familiares" ADD CONSTRAINT "familiares_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "socio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estadocuenta" ADD CONSTRAINT "estadocuenta_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "socio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClasesToEntrenadores" ADD CONSTRAINT "_ClasesToEntrenadores_A_fkey" FOREIGN KEY ("A") REFERENCES "Clases"("idClase") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClasesToEntrenadores" ADD CONSTRAINT "_ClasesToEntrenadores_B_fkey" FOREIGN KEY ("B") REFERENCES "Entrenadores"("coachId") ON DELETE CASCADE ON UPDATE CASCADE;

