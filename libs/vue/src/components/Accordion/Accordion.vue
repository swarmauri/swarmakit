
<template>
  <div class="accordion" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <button
      class="accordion-header"
      :aria-expanded="isOpen"
      @click="toggleAccordion"
      :class="{ hovered: isHovered }"
    >
      <slot name="header"></slot>
    </button>
    <div v-if="isOpen" class="accordion-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Accordion',
  props: {
    defaultOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isOpen = ref(props.defaultOpen);
    const isHovered = ref(false);

    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, toggleAccordion, isHovered };
  },
});
</script>



<style scoped lang="css">
@import './Accordion.css';
</style>
