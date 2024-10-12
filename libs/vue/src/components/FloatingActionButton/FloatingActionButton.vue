<template>
  <button
    class="floating-action-button"
    :aria-expanded="isExpanded"
    @click="toggleExpand"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    aria-label="Floating Action Button"
  >
    <span v-if="isExpanded" class="icon expanded">➖</span>
    <span v-else class="icon">➕</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FloatingActionButton',
  setup() {
    const isExpanded = ref(false);
    const hover = ref(false);

    const toggleExpand = () => {
      isExpanded.value = !isExpanded.value;
    };

    return { isExpanded, toggleExpand, hover };
  },
});
</script>

<style lang="css">
@import './FloatingActionButton.css';
</style>