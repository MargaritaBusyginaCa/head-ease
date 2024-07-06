import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  const entries = ref([]);

  function saveEntry(date, entryData) {
    if (entries.value.length > 0) {
      editEntry(entryData);
    } else {
      addEntry(entryData);
    }
  }
  function addEntry(entryData) {
    entries.value.unshift(entryData);
  }
  function editEntry(entryData) {
    for (let i = 0; i < entries.value.length; i++) {
      if (entries.value[i].date === entryData.date) {
        console.log("update entry");
        break;
      } else {
        console.log("create a new entry");
        addEntry(entryData);
        break;
      }
    }
  }
  return { entries, saveEntry };
});
