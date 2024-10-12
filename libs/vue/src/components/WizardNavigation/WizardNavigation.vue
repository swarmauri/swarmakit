<template>
  <nav class="wizard-nav" role="navigation" aria-label="Wizard Navigation">
    <ul class="wizard-steps">
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="wizard-step"
        :class="{
          completed: step.isCompleted,
          current: step.isCurrent,
          disabled: step.isDisabled,
        }"
        :aria-disabled="step.isDisabled"
      >
        <button
          @click="goToStep(index)"
          :disabled="step.isDisabled"
          :aria-current="step.isCurrent ? 'step' : undefined"
        >
          {{ step.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'WizardNavigation',
  setup() {
    const steps = reactive([
      { label: 'Step 1', isCompleted: true, isCurrent: false, isDisabled: false },
      { label: 'Step 2', isCompleted: false, isCurrent: true, isDisabled: false },
      { label: 'Step 3', isCompleted: false, isCurrent: false, isDisabled: false },
      { label: 'Step 4', isCompleted: false, isCurrent: false, isDisabled: true },
    ]);

    const goToStep = (index: number) => {
      if (!steps[index].isDisabled) {
        steps.forEach((step, i) => {
          step.isCurrent = i === index;
          step.isCompleted = i < index;
        });
      }
    };

    return {
      steps,
      goToStep,
    };
  },
});
</script>

<style lang="css">
@import './WizardNavigation.css';
</style>