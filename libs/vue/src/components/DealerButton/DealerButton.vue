
<template>
  <div class="dealer-button" :class="stateClass" aria-label="Dealer Button">
    D
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DealerButton',
  props: {
    state: {
      type: String,
      default: 'default',
      validator: (value: string) => ['default', 'moving', 'hovered'].includes(value),
    },
  },
  computed: {
    stateClass() {
      return this.state;
    },
  },
});
</script>




<style scoped lang="css">
@import './DealerButton.css';
</style>
