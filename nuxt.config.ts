// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
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
});
