<template>
  <div class="accordion">
    <button
      class="accordion-header"
      @click="toggle"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :aria-expanded="isOpen"
    >
      <span>{{ title }}</span>
      <span v-if="hover" aria-hidden="true">&#9660;</span>
      <span v-else aria-hidden="true">{{ isOpen ? '▲' : '▼' }}</span>
    </button>
    <div v-if="isOpen" class="accordion-content" role="region">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isOpen = ref(props.open);
    const hover = ref(false);

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, toggle, hover };
  },
});
</script>

<style lang="css">
@import './Accordion.css';
</style>