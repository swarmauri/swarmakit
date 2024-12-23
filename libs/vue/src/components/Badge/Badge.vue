
<template>
  <span :class="badgeClass" role="status" aria-live="polite">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    type: {
      type: String as PropType<'default' | 'notification' | 'status-indicator'>,
      default: 'default',
    },
  },
  setup(props) {
    const badgeClass = computed(() => `badge ${props.type}`);

    return { badgeClass };
  },
});
</script>



<style scoped lang="css">
@import './Badge.css';
</style>
