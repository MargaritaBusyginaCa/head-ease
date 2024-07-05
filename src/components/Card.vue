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
    :pt="{ root: 'cards-group' }"
    @update:modelValue="updateValue"
  >
    <template #option="slotProps">
      <div class="flex flex-col items-center">
        <img
          :src="slotProps.option.image"
          :alt="slotProps.value"
          class="h-20"
        />
        <p>{{ slotProps.option.value }}</p>
      </div>
    </template>
  </SelectButton>
</template>

<style>
.cards-group {
  display: grid !important;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
.cards-group > button {
  border-radius: 10px !important;
}
</style>
