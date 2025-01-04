import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corrige los íconos para que se vean correctamente


export default defineNuxtPlugin(() => {
  return {
    provide: {
      leaflet: L,
    },
  };
});
