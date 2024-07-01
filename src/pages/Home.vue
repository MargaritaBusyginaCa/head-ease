<script setup>
import Button from "primevue/button";
</script>

<template>
  <div class="h-screen w-full flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold">How was your head today?</h1>
    <div class="flex gap-5 my-3">
      <Button><i class="fa-regular fa-calendar"></i></Button>
      <Button>Track <i class="fa-solid fa-plus"></i></Button>
    </div>
  </div>
</template>
