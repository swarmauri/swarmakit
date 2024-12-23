
<template>
  <button class="fold-button" :disabled="disabled" aria-label="Fold Hand">
    Fold
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FoldButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './FoldButton.css';
</style>
