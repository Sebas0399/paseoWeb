<template>
  <div class="card flex justify-center">
    <div class="flex flex-col gap-2">
      <label for="nombre">Nombre</label>
      <InputText
        id="nombre"
        v-model="paseo.precio"
        aria-describedby="nombre-help"
      />
      <Message size="small" severity="secondary" variant="simple"
        >Enter your nombre.</Message
      >
    </div>

    <div class="flex flex-col gap-2">
      <label for="cedula">Cedula</label>
      <InputText
        id="cedula"
        v-model="paseo.ubicacion"
        aria-describedby="raza-help"
      />
      <Message size="small" severity="secondary" variant="simple"
        >Enter your raza to reset your password.</Message
      >
    </div>
    <Button @click="enviarUbicacion">Insert</Button>
  </div>

  <div id="map"></div>
</template>

<script lang="ts">
import insertPaseo from "./utils/insertPaseo";
import PaseoWebSocket from "./utils/websocket";
export default {
  data() {
    return {
      paseo: {
        precio: "",
        ubicacion: "",
        perroId: "",
        paseadorId: "",
      },
      ws: null as PaseoWebSocket | null,
      latitud: -34.6037,
      longitud: -58.3816,
    };
  },
  methods: {
    async insertPaseo() {
      await insertPaseo(this.paseo);
    },
    enviarUbicacion(): void {
      if (this.ws) {
        this.latitud += 0.0001; // Simula movimiento en latitud
        this.longitud += 0.0001; // Simula movimiento en longitud
        this.ws.enviarUbicacion(this.latitud, this.longitud);
      }
    }
  },
  mounted() {
    this.ws = new PaseoWebSocket('ws://localhost:9090/ubicaciones');

    const L = this.$leaflet; // Accede a Leaflet desde el plugin

    // Inicializa el mapa centrado en una posición específica
    const map = L.map("map").setView([51.505, -0.09], 13);

    // Agrega una capa base al mapa
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Agrega un marcador con un popup
    const ruta = [
      [51.505, -0.09],
      [51.51, -0.1],
      [51.52, -0.12],
    ];

    // Dibuja la ruta en el mapa
    // URL de la API OSRM
    const url =
      "https://router.project-osrm.org/route/v1/driving/-0.09,51.505;-0.12,51.52?overview=full&geometries=geojson";

    // Llama a la API para obtener la ruta
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Obtiene las coordenadas de la ruta
        const coordinates = data.routes[0].geometry.coordinates.map((coord) =>
          coord.reverse()
        );

        // Dibuja la ruta en el mapa
        const polyline = L.polyline(coordinates, { color: "blue" }).addTo(map);

        // Ajusta el mapa para que la ruta sea visible
        map.fitBounds(polyline.getBounds());
      });
  },
};
</script>

<style scoped>
#map {
  height: 180px;
}
</style>
