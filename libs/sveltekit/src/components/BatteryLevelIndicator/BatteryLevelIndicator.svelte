<script lang="ts">
  export let level: number = 100;
  export let isCharging: boolean = false;

  const getBatteryStatus = () => {
    if (isCharging) return 'charging';
    if (level > 80) return 'full';
    if (level <= 20 && level > 5) return 'low';
    if (level <= 5) return 'critical';
    return 'normal';
  };
</script>

<div 
  class="battery-indicator {getBatteryStatus()}" 
  role="progressbar" 
  aria-valuenow={level} 
  aria-valuemin="0" 
  aria-valuemax="100"
  aria-label="Battery level: {level}%, {isCharging ? 'Charging' : 'Not Charging'}"
>
  {#if isCharging}
    <span class="icon">⚡</span>
  {/if}
  <span class="level">{level}%</span>
</div>

<style lang="css">
  .battery-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    border-radius: 6px;
    background-color: #cfd8dc;
    color: #000;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .battery-indicator.charging {
    background-color: #4caf50;
    color: #fff;
  }

  .battery-indicator.full {
    background-color: #4caf50;
    color: #fff;
  }

  .battery-indicator.low {
    background-color: #ff9800;
    color: #fff;
  }

  .battery-indicator.critical {
    background-color: #f44336;
    color: #fff;
  }

  .icon {
    margin-right: 5px;
  }
</style>