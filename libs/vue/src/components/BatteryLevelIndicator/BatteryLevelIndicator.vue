
<template>
  <div class="battery-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="level">
    <div :class="['battery', batteryState]" :style="{ width: `${level}%` }"></div>
    <div v-if="charging" class="charging-icon">⚡</div>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';

export default defineComponent({
  name: 'BatteryLevelIndicator',
  props: {
    level: {
      type: Number,
      required: true,
    },
    charging: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const batteryState = computed(() => {
      if (props.charging) return 'charging';
      if (props.level > 80) return 'full';
      if (props.level > 20) return 'low';
      return 'critical';
    });

    return { batteryState };
  },
});
</script>



<style scoped lang="css">
@import './BatteryLevelIndicator.css';
</style>
