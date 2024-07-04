<script setup>
import Card from "./Card.vue";
import { useEntriesStore } from "../states/entriesStore";
import { ref } from "vue";

const options = ref([
  { name: "Option 1", value: 1 },
  { name: "Option 2", value: 2 },
  { name: "Option 3", value: 3 },
]);
const selectedOptions = ref(null);
function selectOptions(value) {
  selectedOptions.value = value;
}
</script>

<template>
  <Card
    :options="options"
    optionLabel="name"
    :multiple="true"
    ariaLabeledBy="ariaLabeledBy"
    @update-value="selectOptions"
  >
    <template #body> Hello World </template>
  </Card>
</template>
