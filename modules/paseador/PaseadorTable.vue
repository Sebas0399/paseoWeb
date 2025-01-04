<template>
  <div>
    <DataTable :value="paseadores" tableStyle="min-width: 50rem">
      <Column field="cedula" header="cedula"></Column>
      <Column field="nombre" header="nombre"></Column>
      <Column field="foto" header="foto"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import getPaseadores from "./utils/getPaseadores";
const paseadores = ref([]);

onMounted(() => {
  getPaseadores().then((response) => {
    console.log(response.data);
    paseadores.value = response.data;
  });
});
</script>

<style></style>
