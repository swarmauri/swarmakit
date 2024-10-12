<template>
  <button
    class="scroll-button"
    :class="{ visible: isVisible, hovered: isHovered, clicked: isClicked }"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    aria-label="Scroll to Top"
  >
    ↑
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'ScrollButton',
  props: {
    state: {
      type: String as PropType<'visible' | 'hidden' | 'hovered' | 'clicked'>,
      default: 'hidden',
      validator: (value: string) => ['visible', 'hidden', 'hovered', 'clicked'].includes(value),
    },
  },
  setup(props) {
    const isVisible = computed(() => props.state === 'visible');
    const isHovered = ref(false);
    const isClicked = ref(false);

    const handleClick = () => {
      if (props.state === 'clicked') {
        isClicked.value = true;
        setTimeout(() => isClicked.value = false, 200);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const handleMouseEnter = () => {
      if (props.state === 'hovered') {
        isHovered.value = true;
      }
    };

    const handleMouseLeave = () => {
      if (props.state === 'hovered') {
        isHovered.value = false;
      }
    };

    return { isVisible, isHovered, isClicked, handleClick, handleMouseEnter, handleMouseLeave };
  },
});
</script>

<style lang="css">
@import './ScrollButton.css';
</style>