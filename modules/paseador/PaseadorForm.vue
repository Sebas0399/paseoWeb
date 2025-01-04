<template>
  <div class="card flex justify-center">
    <div class="flex flex-col gap-2">
      <label for="nombre">Nombre</label>
      <InputText
        id="nombre"
        v-model="paseador.nombre"
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
        v-model="paseador.cedula"
        aria-describedby="raza-help"
      />
      <Message size="small" severity="secondary" variant="simple"
        >Enter your raza to reset your password.</Message
      >
    </div>
    <Button @click="insertPaseador">Insert</Button>
  </div>
</template>

<script lang="ts">
import insertPaseador from "./utils/insertPaseador";
export default {
  data() {
    return {
      paseador: {
        nombre: "",
        cedula: "",
      },
    };
  },
  methods: {
    async insertPaseador() {
      await insertPaseador(this.paseador);
    },
  },
};
</script>
