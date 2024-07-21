<script setup>
import { ref, computed } from "vue";
const date = ref(new Date());
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayOfWeek = ref(daysOfWeek[date.value.getDay()]);
const monthOfYear = ref(monthsOfYear[date.value.getMonth()]);
const currentDate = computed(() => {
  return `${dayOfWeek.value}, ${date.value.getDate()} ${
    monthOfYear.value
  } ${date.value.getFullYear()}`;
});
</script>

<template>
  <div>
    <h1>{{ currentDate }}</h1>
  </div>
</template>
