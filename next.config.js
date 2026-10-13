/**
 * **Archivo de configuración de Next.js**

Este archivo define la configuración personalizada para la aplicación Next.js. 
Permite configurar diversos aspectos de la aplicación, como la ruta de las imágenes, 
las variables de entorno y las optimizaciones de rendimiento.

**Nota:** Este archivo no debe ser modificado directamente. 
Para realizar cambios en la configuración, se recomienda crear un archivo 
`next.config.custom.js` y extender la configuración base desde allí.
 */

const nextConfig = {
  poweredByHeader: false,
  // Mientras se reconstruye la aplicación, develop usa únicamente los archivos
  // *.new.ts(x). El código legado permanece disponible sin convertirse en rutas.
  pageExtensions: ["new.tsx", "new.ts"],

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
          },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },

  /**
   * **Configuración de imágenes**

   Define la lista de dominios permitidos para cargar imágenes en la aplicación. 
   En este caso, solo se permite cargar imágenes desde el dominio `res.cloudinary.com`.

   **Nota:** La configuración de imágenes es importante para la seguridad y el rendimiento. 
   Asegúrese de incluir solo los dominios de confianza desde los que desea cargar imágenes.
   */
  images: {
    domains: ["res.cloudinary.com"],
  },

  // ... otras configuraciones
};

module.exports = nextConfig;
