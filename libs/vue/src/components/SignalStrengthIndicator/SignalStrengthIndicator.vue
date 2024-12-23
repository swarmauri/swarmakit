
<template>
  <div class="signal-strength-indicator" role="status" :aria-label="ariaLabel">
    <div
      v-for="level in levels"
      :key="level"
      class="bar"
      :class="{ active: level <= strength }"
      :style="{ height: `${level * 20}%` }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SignalStrengthIndicator',
  props: {
    strength: {
      type: Number,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 5,
    },
  },
  setup(props) {
    const levels = [1, 2, 3, 4, 5];

    const ariaLabel = computed(() => {
      switch (props.strength) {
        case 5:
          return 'Full Signal';
        case 4:
        case 3:
          return 'Good Signal';
        case 2:
        case 1:
          return 'Weak Signal';
        default:
          return 'No Signal';
      }
    });

    return {
      levels,
      ariaLabel,
    };
  },
});
</script>




<style scoped lang="css">
@import './SignalStrengthIndicator.css';
</style>
