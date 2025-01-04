<template>
  <div>
    <DataTable :value="perros" tableStyle="min-width: 50rem">
      <Column field="nombre" header="nombre"></Column>
      <Column field="raza" header="raza"></Column>
      <Column field="foto" header="foto"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import getPerros from './utils/getPerros';

const perros = ref([]);

onMounted(() => {
  getPerros().then((response) => {
    console.log(response.data);
    perros.value = response.data;
  });
});
</script>

<style></style>
