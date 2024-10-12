<template>
  <div class="loading-bars" role="progressbar" aria-valuenow="activeStep" aria-valuemin="1" :aria-valuemax="steps.length">
    <div v-for="(step, index) in steps" :key="step.id" class="step" :class="getStepClass(index)">
      <div class="step-bar"></div>
      <span class="step-label">{{ step.label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Step {
  id: number;
  label: string;
}

export default defineComponent({
  name: 'LoadingBarsWithSteps',
  props: {
    steps: {
      type: Array as () => Step[],
      required: true,
    },
    activeStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getStepClass(index: number): string {
      if (index < this.activeStep) return 'completed';
      if (index === this.activeStep) return 'active';
      return 'inactive';
    },
  },
});
</script>

<style lang="css">
@import './LoadingBarsWithSteps.css';
</style>