<template>
  <div class="poll-results" role="region" aria-live="polite" :aria-label="status">
    <h2>{{ pollTitle }}</h2>
    <ul>
      <li v-for="option in options" :key="option.id" class="poll-option">
        <span>{{ option.text }}</span>
        <div class="progress-bar" :style="{ width: option.percentage + '%' }"></div>
        <span class="percentage">{{ option.percentage }}%</span>
      </li>
    </ul>
    <p class="status">{{ status }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface PollOption {
  id: number;
  text: string;
  percentage: number;
}

export default defineComponent({
  name: 'InteractivePollResults',
  props: {
    pollTitle: {
      type: String,
      required: true,
    },
    options: {
      type: Array as () => PollOption[],
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="css">
@import './InteractivePollResults.css';
</style>