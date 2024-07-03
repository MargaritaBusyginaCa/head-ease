<script setup>
import DatePicker from "primevue/datepicker";
import Button from "primevue/button";
import { useEntriesStore } from "../states/entriesStore";
import { ref } from "vue";

const date = ref(new Date());
const entries = useEntriesStore();
function addEntry() {
  entries.addEntry({
    date: date.value,
    description: "hi",
  });
}
function editEntry() {
  entries.editEntry(date.value, {
    date: date.value,
    description: "bye",
  });
}
</script>

<template>
  {{ date }}
  {{ entries.entries }}
  <DatePicker v-model="date" inline></DatePicker>
  <Button @click="addEntry">Add</Button>
  <Button @click="editEntry">Edit</Button>
</template>
