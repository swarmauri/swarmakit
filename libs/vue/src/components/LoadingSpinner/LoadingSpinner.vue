<template>
  <div v-if="active" class="spinner" role="status" aria-live="polite" aria-busy="true">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoadingSpinner',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="css">
@import './LoadingSpinner.css';
</style>