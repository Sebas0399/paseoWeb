<template>
  <div class="card flex justify-center">
    <div class="flex flex-col gap-2">
      <label for="nombre">Nombre</label>
      <InputText
        id="nombre"
        v-model="perro.nombre"
        aria-describedby="nombre-help"
      />
      <Message size="small" severity="secondary" variant="simple"
        >Enter your nombre.</Message
      >
    </div>

    <div class="flex flex-col gap-2">
      <label for="raza">Raza</label>
      <InputText
        id="raza"
        v-model="perro.raza"
        aria-describedby="raza-help"
      />
      <Message size="small" severity="secondary" variant="simple"
        >Enter your raza to reset your password.</Message
      >
    </div>
    <Button @click="insertPerro">Insert</Button>
    
  </div>
</template>

<script > 
import insertPerro from './utils/insertPerro';
export default {
  data() {
    return {
      perro: {
        nombre: "",
        raza: "",
      },
    };
  },
  methods: {
    async insertPerro() {
      await insertPerro(this.perro);
    },
  },
};
</script>
