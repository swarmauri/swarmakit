<script lang="ts">
  export let signalStrength: 'full' | 'weak' | 'none' = 'none';

  const getBars = () => {
    switch (signalStrength) {
      case 'full':
        return [true, true, true, true];
      case 'weak':
        return [true, true, false, false];
      case 'none':
        return [false, false, false, false];
      default:
        return [false, false, false, false];
    }
  };
</script>

<div class="signal-strength-indicator" aria-label="Signal Strength">
  {#each getBars() as bar, index}
    <div
      class="bar {bar ? 'active' : ''}"
      role="presentation"
    ></div>
  {/each}
</div>

<style lang="css">
  .signal-strength-indicator {
    display: flex;
    gap: 2px;
    align-items: flex-end;
  }

  .bar {
    width: 6px;
    height: 12px;
    background-color: #e0e0e0;
    transition: background-color 0.2s, height 0.2s;
  }

  .bar.active {
    background-color: #4caf50;
  }

  .bar:nth-child(1).active {
    height: 6px;
  }

  .bar:nth-child(2).active {
    height: 12px;
  }

  .bar:nth-child(3).active {
    height: 18px;
  }

  .bar:nth-child(4).active {
    height: 24px;
  }
</style>