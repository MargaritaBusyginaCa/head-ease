<script setup>
import { ref } from "vue";
import SelectButton from "primevue/selectbutton";

defineProps({
  options: Array,
  multiple: Boolean,
  optionLabel: String,
  ariaLabeledBy: String,
});

const emit = defineEmits(["update-value"]);
const value = ref(null);
function updateValue() {
  emit("update-value", value.value);
}
</script>

<template>
  <SelectButton
    v-model="value"
    :options="options"
    :optionLabel="optionLabel"
    :multiple="multiple"
    :aria-labelledby="ariaLabeledBy"
    @update:modelValue="updateValue"
  />
</template>
