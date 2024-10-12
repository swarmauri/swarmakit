<script lang="ts">
  export let level: number = 100;
  export let isCharging: boolean = false;

  $: batteryStatus = getBatteryStatus(level, isCharging);

  function getBatteryStatus(level: number, isCharging: boolean) {
    if (isCharging) return 'Charging';
    if (level > 80) return 'Full';
    if (level > 20) return 'Low Battery';
    return 'Critical';
  }
</script>

<div
  class="battery-level-indicator"
  role="progressbar"
  aria-valuenow={level}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label={batteryStatus}
>
  <div class="battery-level" style={`width: ${level}%`}></div>
  <span class="battery-status">{batteryStatus}</span>
</div>

<style lang="css">
  @import './BatteryLevelIndicator.css';
</style>