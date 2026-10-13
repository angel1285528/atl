# GestionATL

Reconstrucción de la plataforma administrativa de Academia Tigres Linares.

## Desarrollo local

La rama `develop` usa una instancia PostgreSQL exclusiva, publicada sólo en
`127.0.0.1:5433`. No reutilices aquí las credenciales de producción.

1. Copia `.env.example` a `.env` y sustituye `PASSWORD` en las URL por la misma
   contraseña indicada en `GESTIONATL_DEV_DB_PASSWORD` y `POSTGRES_PASSWORD`.
2. Genera un secreto de al menos 32 bytes para `BETTER_AUTH_SECRET`.
3. Instala dependencias, inicia PostgreSQL y aplica las migraciones:

```bash
npm install
npm run db:dev:up
npm run db:migrate
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

Puedes consultar el estado con `npm run db:dev:status` y detener el contenedor
con `npm run db:dev:down`. Este último comando conserva el volumen y los datos.

## Creación restringida de cuentas

El registro público está deshabilitado. Las cuentas se crean desde una terminal
con acceso al proyecto; la contraseña se solicita interactivamente para evitar
guardarla en el historial del shell.

```bash
npm run auth:create-user -- \
  --email admin@example.com \
  --name "Administrador" \
  --role admin
```

Roles con acceso al dashboard actual:

- `admin`
- `entrenador`
- `auxiliar`

Para crear otra cuenta se repite el comando cambiando correo, nombre y rol. No
se debe añadir una pantalla pública de registro.

## Verificación

```bash
npm run typecheck
npm run build
npm audit --omit=dev
```

La rama `develop` contiene únicamente la reconstrucción. La aplicación anterior,
sus componentes y su esquema histórico se conservan en la rama `legado`.
