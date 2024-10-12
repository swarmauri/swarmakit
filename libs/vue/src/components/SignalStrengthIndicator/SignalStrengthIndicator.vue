<template>
  <div class="signal-strength" role="img" aria-label="Signal Strength">
    <div 
      v-for="bar in 5" 
      :key="bar" 
      :class="['bar', { active: bar <= strength }]" 
      aria-hidden="true"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SignalStrengthIndicator',
  props: {
    strength: {
      type: Number as PropType<number>,
      required: true,
    },
    state: {
      type: String as PropType<'full' | 'weak' | 'none'>,
      default: 'none',
    },
  },
});
</script>

<style lang="css">
@import './SignalStrengthIndicator.css';
</style>