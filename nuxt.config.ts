// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    /* Configuration */
    autoImport: true,
    options: {
      ripple: true,

      theme: {
        preset: Aura,
        cssLayer: {
          name: "primevue",
          order: "tailwind-base, primevue, tailwind-utilities",
        },
      },
    },
  },
  plugins: [
    { src: '~/plugins/leaflet.client.ts', mode: 'client' }, // Registra el plugin para el cliente
  ],
  css: ['leaflet/dist/leaflet.css'], // Asegúrate de importar los estilos CSS de Leaflet
});
