<script setup>
import DatePicker from "primevue/datepicker";
import LoggingPanel from "../components/LoggingPanel.vue";
import { ref } from "vue";

const date = ref(new Date());
</script>

<template>
  <main
    class="h-screen flex gap-8 flex-col md:flex-row justify-center items-center"
  >
    <div class="">
      <DatePicker v-model="date" inline></DatePicker>
    </div>
    <div>
      <LoggingPanel :date="date" />
    </div>
  </main>
</template>
