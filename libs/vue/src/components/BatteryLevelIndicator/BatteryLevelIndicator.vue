<template>
  <div class="battery-level-indicator" role="progressbar" :aria-valuenow="level" aria-valuemin="0" aria-valuemax="100" :aria-label="status">
    <div class="battery-icon" :class="status">
      <div class="battery-level" :style="{ width: `${level}%` }"></div>
    </div>
    <span class="battery-status">{{ status }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'BatteryLevelIndicator',
  props: {
    level: {
      type: Number,
      required: true,
    },
    isCharging: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    status() {
      if (this.isCharging) return 'Charging';
      if (this.level > 80) return 'Full';
      if (this.level > 20) return 'Low Battery';
      return 'Critical';
    },
  },
});
</script>

<style lang="css">
@import './BatteryLevelIndicator.css';
</style>