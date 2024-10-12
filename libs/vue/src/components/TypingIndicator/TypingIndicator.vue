<template>
  <div :class="['typing-indicator', state]" v-if="state !== 'hidden'" role="alert" aria-live="polite">
    <span v-if="state === 'typing'" aria-hidden="true">•••</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TypingIndicator',
  props: {
    state: {
      type: String,
      default: 'hidden',
      validator: (value: string) => ['visible', 'hidden', 'typing'].includes(value),
    },
  },
});
</script>

<style lang="css">
@import './TypingIndicator.css';
</style>