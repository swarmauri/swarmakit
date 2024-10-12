<template>
  <div class="validation-message" :class="type" role="alert" :aria-live="type === 'error' ? 'assertive' : 'polite'">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ValidationMessages',
  props: {
    type: {
      type: String as PropType<'success' | 'error' | 'warning'>,
      required: true,
    },
  },
});
</script>

<style lang="css">
@import './ValidationMessages.css';
</style>