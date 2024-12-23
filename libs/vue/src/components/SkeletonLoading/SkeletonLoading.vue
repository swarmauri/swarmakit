
<template>
  <div class="skeleton-loading" :aria-busy="loading">
    <div v-if="loading" class="skeleton"></div>
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




<style scoped lang="css">
@import './SkeletonLoading.css';
</style>
