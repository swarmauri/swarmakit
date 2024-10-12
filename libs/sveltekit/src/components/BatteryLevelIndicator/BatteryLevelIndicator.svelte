<script lang="ts">
  export let level: number = 100;
  export let isCharging: boolean = false;

  $: indicatorClass = level > 80 ? 'full' : level > 20 ? 'low' : 'critical';
</script>

<div class="battery-level-indicator {indicatorClass}" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100">
  <div class="battery-icon">
    <div class="battery-fill" style="width: {level}%;"></div>
  </div>
  {#if isCharging}
    <span class="charging-indicator">⚡</span>
  {/if}
</div>

<style lang="css">
  @import './BatteryLevelIndicator.css';
</style>