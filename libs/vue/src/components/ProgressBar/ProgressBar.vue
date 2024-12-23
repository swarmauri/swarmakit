
<template>
  <div
    class="progress-bar-container"
    :class="{ disabled }"
    role="progressbar"
    :aria-valuenow="progress"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="`Progress: ${progress}%`"
  >
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './ProgressBar.css';
</style>
