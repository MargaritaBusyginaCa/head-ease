<script setup>
import DatePicker from "primevue/datepicker";
import { ref } from "vue";
const date = ref(null);
</script>

<template>
  <DatePicker v-model="date" inline showWeek></DatePicker>
</template>
