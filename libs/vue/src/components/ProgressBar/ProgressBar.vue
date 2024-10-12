<template>
  <div class="progress-bar-container" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number as PropType<number>,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="css">
@import './ProgressBar.css';
</style>