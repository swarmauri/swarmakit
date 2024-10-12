<template>
  <span class="badge" :class="type" role="status" aria-live="polite">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    type: {
      type: String as PropType<'default' | 'notification' | 'status'>,
      default: 'default',
    },
  },
});
</script>

<style lang="css">
@import './Badge.css';
</style>