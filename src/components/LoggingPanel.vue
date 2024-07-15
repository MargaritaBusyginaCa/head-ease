<script setup>
import { useEntriesStore } from "../states/entriesStore";
import symptomsData from "../data/symptoms.json";
import causesData from "../data/causes.json";
import FloatLabel from "primevue/floatlabel";
import CardGroup from "./CardGroup.vue";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { ref } from "vue";

const props = defineProps({
  date: Object,
});

const entriesStore = useEntriesStore();
const selectedSymptoms = ref(null);
function selectSymptoms(value) {
  selectedSymptoms.value = value;
}
const symptoms = ref(symptomsData);

const selectedCauses = ref(null);
function selectCauses(value) {
  selectedCauses.value = value;
}
const causes = ref(causesData);
const notesValue = ref("");

function saveData() {
  const entryData = {
    date: props.date,
    symptoms: selectedSymptoms.value,
    causes: selectedCauses.value,
    notes: notesValue.value,
  };
  entriesStore.saveEntry(entryData);
}
</script>

<template>
  <div class="*:my-7">
    <div>
      <p>Symptoms</p>
      <CardGroup
        :options="symptoms"
        optionLabel="name"
        :multiple="true"
        ariaLabeledBy="ariaLabeledBy"
        @update-value="selectSymptoms"
      />
    </div>
    <div>
      <p>Causes</p>
      <CardGroup
        :options="causes"
        optionLabel="name"
        :multiple="true"
        ariaLabeledBy="ariaLabeledBy"
        @update-value="selectCauses"
      />
    </div>
    <div>
      <FloatLabel>
        <Textarea v-model="notesValue" rows="5" cols="5" class="w-full" />
        <label>Notes</label>
      </FloatLabel>
    </div>
  </div>
  <Button @click="saveData">Save</Button>
</template>
