<template>
  <div 
    class="progress-circle" 
    role="progressbar" 
    :aria-valuenow="progress" 
    aria-valuemin="0" 
    aria-valuemax="100"
  >
    <svg viewBox="0 0 32 32">
      <circle class="background" cx="16" cy="16" r="14"></circle>
      <circle 
        class="progress" 
        cx="16" 
        cy="16" 
        r="14" 
        :style="{ strokeDashoffset: circumference - (progress / 100) * circumference }"
      ></circle>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProgressCircle',
  props: {
    progress: {
      type: Number as PropType<number>,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
    state: {
      type: String as PropType<'active' | 'paused' | 'complete' | 'incomplete'>,
      default: 'active',
    },
  },
  computed: {
    circumference(): number {
      return 2 * Math.PI * 14;
    },
  },
});
</script>

<style lang="css">
@import './ProgressCircle.css';
</style>