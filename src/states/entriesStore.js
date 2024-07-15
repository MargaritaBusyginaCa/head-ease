import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  const entries = ref([]);

  function saveEntry(entryData) {
    if (entries.value.length > 0) {
      editEntry(entryData);
    } else {
      addEntry(entryData);
    }
    getLoggedDays();
  }
  function addEntry(entryData) {
    entries.value.unshift(entryData);
  }
  function editEntry(entryData) {
    for (let i = 0; i < entries.value.length; i++) {
      if (entries.value[i].date === entryData.date) {
        entries.value[i] = entryData;
        break;
      } else {
        addEntry(entryData);
        break;
      }
    }
  }
  function getLoggedDays() {
    const month = 6;
    const year = 124;
    const loggedDays = [];
    for (let i = 0; i < entries.value.length; i++) {
      if (
        entries.value[i].date.getMonth() === month &&
        entries.value[i].date.getYear() === year
      ) {
        loggedDays.push(entries.value[i].date.getDate());
      }
    }
    return loggedDays;
  }
  return { entries, saveEntry, getLoggedDays };
});
