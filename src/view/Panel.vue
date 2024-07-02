<script setup>
import Button from "primevue/button";
import { useComponent } from "../states/component";
const { component } = useComponent();

function openCalendar() {
  component.value = "calendar";
}
</script>

<template>
  {{ component }}
  <h1 class="text-3xl font-bold">How was your head today?</h1>
  <div class="flex gap-5 my-3">
    <Button @click="openCalendar"
      >History<i class="fa-regular fa-calendar"></i
    ></Button>
    <Button>Track <i class="fa-solid fa-plus"></i></Button>
  </div>
</template>
