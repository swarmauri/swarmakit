<template>
  <div class="sticky-container" :class="{ scrolled: isScrolled }" role="complementary">
    <div class="sticky-header" @click="toggleExpand" :aria-expanded="isExpanded">
      <slot name="header">Sticky Header</slot>
    </div>
    <div v-show="isExpanded" class="sticky-content">
      <slot name="content">Sticky Content</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Sticky',
  setup() {
    const isScrolled = ref(false);
    const isExpanded = ref(true);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    const toggleExpand = () => {
      isExpanded.value = !isExpanded.value;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
      isExpanded,
      toggleExpand,
    };
  },
});
</script>

<style lang="css">
@import './Sticky.css';
</style>