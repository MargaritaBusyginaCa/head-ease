<script setup>
import DatePicker from "primevue/datepicker";
import LoggingPanel from "../components/LoggingPanel.vue";
import { useEntriesStore } from "../states/entriesStore";
import { ref } from "vue";

const entriesStore = useEntriesStore();
const date = ref(new Date());
const today = ref(new Date());

function monthChange() {
  //To-do: change getLoggedDays
  console.log("month-changed");
}
</script>

<template>
  <main
    class="h-screen flex gap-8 flex-col md:flex-row justify-center items-center"
  >
    <div class="">
      <DatePicker
        v-model="date"
        inline
        :maxDate="today"
        showButtonBar
        @month-change="monthChange"
      >
        <template #date="slotProps">
          <strong
            v-if="entriesStore.getLoggedDays().includes(slotProps.date.day)"
            class="text-green-400"
            >{{ slotProps.date.day }}</strong
          >
          <template v-else>{{ slotProps.date.day }}</template>
        </template>
      </DatePicker>
    </div>
    <div>
      <LoggingPanel :date="date" />
    </div>
  </main>
</template>

<style>
.p-datepicker-day-selected {
  background-color: rgb(188, 234, 188) !important;
}
</style>
