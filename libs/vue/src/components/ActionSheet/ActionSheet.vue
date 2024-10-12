<template>
  <div
    class="action-sheet"
    role="dialog"
    aria-modal="true"
    aria-hidden="!isOpen"
    v-show="isOpen"
  >
    <div class="action-sheet-content">
      <slot />
      <button class="action-sheet-close" @click="close" aria-label="Close">
        Close
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ActionSheet',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit('update:isOpen', false);
    };

    return {
      close,
    };
  },
});
</script>

<style lang="css">
@import './ActionSheet.css';
</style>