<template>
  <span class="badge-with-counts" role="status" aria-live="polite">
    <slot></slot>
    <span v-if="count !== undefined" class="count" :aria-label="`Count: ${displayCount}`">
      {{ displayCount }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BadgeWithCounts',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 99,
    },
  },
  computed: {
    displayCount() {
      return this.count > this.max ? `${this.max}+` : this.count;
    },
  },
});
</script>

<style lang="css">
@import './BadgeWithCounts.css';
</style>