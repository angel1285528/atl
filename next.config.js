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
  /**
   * **Configuración de imágenes**

   Define la lista de dominios permitidos para cargar imágenes en la aplicación. 
   En este caso, solo se permite cargar imágenes desde el dominio `res.cloudinary.com`.

   **Nota:** La configuración de imágenes es importante para la seguridad y el rendimiento. 
   Asegúrese de incluir solo los dominios de confianza desde los que desea cargar imágenes.
   */
  images: {
    domains: ['res.cloudinary.com'],
  },

  // ... otras configuraciones
};

module.exports = nextConfig;
