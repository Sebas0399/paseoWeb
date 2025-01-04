<template>
  <div>
    <button @click="submit">Submit</button>
    <Button label="Verify" />
    <InputText placeholder="Overriden" class="!p-8" />
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
async function submit() {
  await axios.post("http://localhost:9090/user", {
    name: "John Doe",
    email:"algo.com",
    password: "123",
  });
}
</script>

<style></style>
