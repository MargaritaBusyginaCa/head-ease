<script setup>
import DatePicker from "primevue/datepicker";
import Button from "primevue/button";
import LoggingPanel from "../components/LoggingPanel.vue";
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
  <main class="flex gap-6">
    <div>
      <p>{{ entriesStore.entries }}</p>
      <DatePicker v-model="date" inline></DatePicker>
      <div>
        <Button v-if="!entriesStore.dateLogged(date)" @click="addEntry"
          >Log</Button
        >
        <Button v-else @click="editEntry">Edit</Button>
      </div>
    </div>
    <div>
      <LoggingPanel />
    </div>
  </main>
</template>
