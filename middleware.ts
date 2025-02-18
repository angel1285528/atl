// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session: any = await getToken({ req: request });

  // Rutas protegidas
  const protectedRoutes = ["/modulos"];

  // Verificar si la ruta actual está protegida
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !session) {
    // Redirigir al login si no hay sesión
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Verificar roles (opcional)
  if (isProtectedRoute && session) {
    const allowedRoles = ["SuperAdmin", "Admin"];
    if (!allowedRoles.includes(session.user.rol)) {
      return NextResponse.redirect(new URL("/auth/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}