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
function selectSymptoms(value) {
  entriesStore.selectedSymptoms = value;
}
const symptoms = ref(symptomsData);
function selectCauses(value) {
  entriesStore.selectedCauses = value;
}
const causes = ref(causesData);

function saveData() {
  const entryData = {
    date: props.date,
    symptoms: entriesStore.selectedSymptoms,
    causes: entriesStore.selectedCauses,
    notes: entriesStore.note,
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
        <Textarea
          v-model="entriesStore.note"
          rows="5"
          cols="5"
          class="w-full"
        />
        <label>Notes</label>
      </FloatLabel>
    </div>
  </div>
  <Button @click="saveData">Save</Button>
</template>
