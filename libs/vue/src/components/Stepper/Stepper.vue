
<template>
  <nav class="stepper" aria-label="Progress steps">
    <ol>
      <li
        v-for="(step, index) in steps"
        :key="index"
        :class="['step', step.status]"
        :aria-current="step.status === 'active' ? 'step' : undefined"
      >
        <span class="step-label">{{ step.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Step {
  label: string;
  status: 'completed' | 'active' | 'disabled';
}

export default defineComponent({
  name: 'Stepper',
  props: {
    steps: {
      type: Array as () => Step[],
      required: true,
    },
  },
});
</script>




<style scoped lang="css">
@import './Stepper.css';
</style>
