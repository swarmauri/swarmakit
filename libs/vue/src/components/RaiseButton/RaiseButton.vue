
<template>
  <button class="raise-button" :disabled="disabled" aria-label="Raise Bet">
    Raise
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RaiseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './RaiseButton.css';
</style>
