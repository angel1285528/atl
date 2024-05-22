import type { Config } from "tailwindcss"

const config = {
  // Modo oscuro: utiliza una clase para alternar entre modo claro y oscuro
  darkMode: ["class"],

  // Archivos que Tailwind CSS debe analizar para encontrar clases
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  // Prefijo para las clases Tailwind (en este caso, cadena vacía)
  prefix: "",

  // Tema de Tailwind CSS
  theme: {
    // Configuración del contenedor principal
    container: {
      // Centra el contenido del contenedor
      center: true,

      // Agrega relleno al contenedor
      padding: "2rem",

      // Tamaños de pantalla para el ancho del contenedor
      screens: {
        "2xl": "1400px", // Ancho de pantalla para pantallas extra grandes
      },
    },

    // Extensión del tema predeterminado con keyframes y animaciones personalizados
    extend: {
      keyframes: {
        // Animación para cerrar un acordeón
        "accordion-down": {
          from: { height: "0" }, // Inicia con altura 0
          to: { height: "var(--radix-accordion-content-height)" }, // Termina con la altura del contenido
        },

        // Animación para abrir un acordeón
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Inicia con la altura del contenido
          to: { height: "0" }, // Termina con altura 0
        },
      },

      animation: {
        // Asocia la animación "accordion-down" con la clase "accordion-down"
        "accordion-down": "accordion-down 0.2s ease-out",

        // Asocia la animación "accordion-up" con la clase "accordion-up"
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  // Plugins adicionales para Tailwind CSS
  plugins: [require("tailwindcss-animate")], // Plugin para animaciones
} satisfies Config; // Asegura que la configuración "config" cumple con el tipo "Config" definido por Tailwind CSS


// Exporta la configuración "config" como la exportación predeterminada del módulo
export default config;