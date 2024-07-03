import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  const entries = ref([]);
  function addEntry(newEntry) {
    entries.value.unshift(newEntry);
  }
  function editEntry(date, newEntry) {
    for (let i = 0; i < entries.value.length; i++) {
      if (entries.value[i].date === date) {
        entries.value[i] = newEntry;
      }
    }
  }
  function dateLogged(date) {
    for (let i = 0; i < entries.value.length; i++) {
      if (entries.value[i].date === date) {
        return true;
      }
      return false;
    }
  }
  return { entries, addEntry, editEntry, dateLogged };
});
