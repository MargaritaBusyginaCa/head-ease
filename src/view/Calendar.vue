<script setup>
import DatePicker from "primevue/datepicker";
import Button from "primevue/button";
import { useEntriesStore } from "../states/entriesStore";
import { ref } from "vue";

const date = ref(new Date());
const entriesStore = useEntriesStore();

function addEntry() {
  entriesStore.addEntry({
    date: date.value,
    description: "hi",
  });
}
function editEntry() {
  entriesStore.editEntry(date.value, {
    date: date.value,
    description: "bye",
  });
}
</script>

<template>
  {{ date }}
  {{ entriesStore.entries }}
  <DatePicker v-model="date" inline></DatePicker>
  <div class="flex gap-5 my-5">
    <Button v-if="!entriesStore.dateLogged(date)" @click="addEntry">Log</Button>
    <Button v-else @click="editEntry">Edit</Button>
  </div>
</template>
