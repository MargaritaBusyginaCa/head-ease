<script setup>
import { useComponent } from "../states/component";
const { component } = useComponent();
import { computed } from "vue";
import Calendar from "../view/Calendar.vue";
import Panel from "../view/Panel.vue";

const renderComponent = computed(() => {
  if (component.value === "calendar") {
    return Calendar;
  } else {
    return Panel;
  }
});
</script>

<template>
  <div class="h-screen w-full flex flex-col items-center justify-center">
    <component :is="renderComponent" />
  </div>
</template>
