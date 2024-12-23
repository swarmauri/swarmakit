
<template>
  <div class="loading-bars" role="progressbar" aria-valuemin="0" :aria-valuenow="currentStep" :aria-valuemax="steps.length">
    <ul>
      <li v-for="(step, index) in steps" :key="step.id" :class="getStepClass(index)">
        <div class="step-bar" :style="{ '--progress': `${getProgress(index)}%` }"></div>
        <span class="step-label">{{ step.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Step {
  id: number;
  label: string;
}

export default defineComponent({
  name: 'LoadingBarsWithSteps',
  props: {
    steps: {
      type: Array as PropType<Step[]>,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getStepClass(index: number) {
      if (index < this.currentStep) return 'completed';
      if (index === this.currentStep) return 'active';
      return 'inactive';
    },
    getProgress(index: number) {
      if (index < this.currentStep) return 100;
      if (index === this.currentStep) return 50;
      return 0;
    },
  },
});
</script>




<style scoped lang="css">
@import './LoadingBarsWithSteps.css';
</style>
