import { ref } from "vue";

const component = ref("");

export function useComponent() {
  return {
    component,
  };
}
