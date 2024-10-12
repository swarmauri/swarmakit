<template>
  <div class="stepper" role="progressbar" :aria-valuenow="currentStep" :aria-valuemin="1" :aria-valuemax="totalSteps">
    <div
      v-for="step in totalSteps"
      :key="step"
      :class="['step', getStepClass(step)]"
      :aria-label="`Step ${step} ${getStepLabel(step)}`"
    >
      {{ step }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Stepper',
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getStepClass(step: number): string {
      if (step < this.currentStep) return 'completed';
      if (step === this.currentStep) return 'active';
      return 'disabled';
    },
    getStepLabel(step: number): string {
      if (step < this.currentStep) return 'completed';
      if (step === this.currentStep) return 'active';
      return 'disabled';
    },
  },
});
</script>

<style lang="css">
@import './Stepper.css';
</style>