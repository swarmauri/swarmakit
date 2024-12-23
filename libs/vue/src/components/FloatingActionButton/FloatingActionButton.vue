
<template>
  <button
    class="floating-action-button"
    @click="toggleExpand"
    :aria-expanded="localIsExpanded"
  >
    <span v-if="localIsExpanded" aria-hidden="true">✖</span>
    <span v-else aria-hidden="true">+</span>
    <span class="sr-only">{{ localIsExpanded ? 'Close menu' : 'Open menu' }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FloatingActionButton',
  props: {
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const localIsExpanded = ref(props.isExpanded);

    const toggleExpand = () => {
      localIsExpanded.value = !localIsExpanded.value;
    };

    return { localIsExpanded, toggleExpand };
  },
});
</script>




<style scoped lang="css">
@import './FloatingActionButton.css';
</style>
