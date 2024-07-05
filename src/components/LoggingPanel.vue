<script setup>
import Card from "./Card.vue";
import { ref } from "vue";

const selectedSymptoms = ref(null);
function selectSymptoms(value) {
  selectedSymptoms.value = value;
}
const symptoms = ref([
  {
    name: "Mild head ache",
    value: "Mild head ache",
    image: "/images/anxiety.png",
  },
  { name: "Migraine", value: "Migraine", image: "/images/pain.png" },
  {
    name: "Light sensitivity",
    value: "Light sensitivity",
    image: "/images/eye.png",
  },
]);

const selectedCauses = ref(null);
function selectCauses(value) {
  selectedCauses.value = value;
}
const causes = ref([
  {
    name: "Smells",
    value: "Smells",
    image: "/images/cleaning-spray.png",
  },
  {
    name: "Weather changes",
    value: "weather changes",
    image: "/images/hot-weather.png",
  },
  {
    name: "Overheating",
    value: "Overheating",
    image: "/images/sun.png",
  },
]);
</script>

<template>
  <div class="">
    <div>
      <p>Symptoms</p>
      <Card
        :options="symptoms"
        optionLabel="name"
        :multiple="true"
        ariaLabeledBy="ariaLabeledBy"
        @update-value="selectSymptoms"
      />
    </div>
    <div>
      <p>Causes</p>
      <Card
        :options="causes"
        optionLabel="name"
        :multiple="true"
        ariaLabeledBy="ariaLabeledBy"
        @update-value="selectCauses"
      />
    </div>
  </div>
</template>
