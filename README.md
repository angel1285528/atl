# GestionATL

Reconstrucción de la plataforma administrativa de Academia Tigres Linares.

## Desarrollo local

1. Copia `.env.example` a `.env.local` y configura PostgreSQL.
2. Genera un secreto de al menos 32 bytes para `BETTER_AUTH_SECRET`.
3. Instala dependencias y aplica migraciones:

```bash
npm install
npx prisma migrate deploy
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

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

La rama `develop` utiliza solamente rutas `*.new.ts` y `*.new.tsx`. El código
anterior permanece aislado mientras avanza la reconstrucción y su versión
operativa se conserva en la rama `legado`.
