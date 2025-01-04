<template>
  <div>
    <DataTable :value="paseos" tableStyle="min-width: 50rem">
      <Column field="precio" header="precio"></Column>
      <Column field="ubicacion" header="ubicacion"></Column>
      <Column field="perroId" header="perro"></Column>
      <Column field="paseadorId" header="paseador"></Column>

    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import getPaseos from "./utils/getPaseos";
const paseos = ref([]);

onMounted(() => {
  getPaseos().then((response) => {
    console.log(response.data);
    paseos.value = response.data;
  });
});
</script>

<style></style>
