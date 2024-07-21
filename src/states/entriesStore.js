import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntriesStore = defineStore("entries", () => {
  const entries = ref([]);
  return { entries };
});
