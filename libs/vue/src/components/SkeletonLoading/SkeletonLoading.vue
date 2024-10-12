<template>
  <div :class="['skeleton', { active: !loading }]" role="status" aria-live="polite">
    <div v-if="loading" class="skeleton-block"></div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SkeletonLoading',
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
});
</script>

<style lang="css">
@import './SkeletonLoading.css';
</style>