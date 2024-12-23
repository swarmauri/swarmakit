
<template>
  <span :class="badgeClass" role="status" aria-live="polite">
    <span v-if="count > 99" class="overflow">99+</span>
    <span v-else>{{ count }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'; // Removed the unused PropType import

export default defineComponent({
  name: 'BadgeWithCounts',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const badgeClass = computed(() => `badge ${props.count > 0 ? 'active' : 'zero'}`);

    return { badgeClass };
  },
});
</script>



<style scoped lang="css">
@import './BadgeWithCounts.css';
</style>
