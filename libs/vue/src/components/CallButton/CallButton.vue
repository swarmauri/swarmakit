
<template>
  <button class="call-button" :disabled="disabled" aria-label="Call Bet">
    Call
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>




<style scoped lang="css">
@import './CallButton.css';
</style>
