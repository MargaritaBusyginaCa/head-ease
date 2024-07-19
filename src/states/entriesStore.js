import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  const entries = ref([]);
  const date = new Date();
  const month = ref(date.getMonth() + 1);
  const year = ref(date.getYear());
  let selectedCauses = ref(null);
  let selectedSymptoms = ref(null);
  let note = ref(null);
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
    const loggedDays = [];
    for (let i = 0; i < entries.value.length; i++) {
      const entryMonth = entries.value[i].date.getMonth() + 1;
      const entryYear = entries.value[i].date.getYear();
      if (entryMonth === month.value && entryYear === year.value) {
        loggedDays.push(entries.value[i].date.getDate());
      }
    }
    return loggedDays;
  }
  return {
    entries,
    saveEntry,
    getLoggedDays,
    month,
    year,
    selectedCauses,
    selectedSymptoms,
    note,
  };
});
