<template>
  <div class="status-dots" role="status" :aria-label="`Status: ${status}`">
    <span :class="['dot', status]" aria-hidden="true"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'StatusDots',
  props: {
    status: {
      type: String as PropType<'online' | 'offline' | 'busy' | 'idle'>,
      required: true,
    },
  },
});
</script>

<style lang="css">
@import './StatusDots.css';
</style>