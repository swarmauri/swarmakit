<script lang="ts">
  export let strength: number = 0;
  export let maxStrength: number = 5;

  const getBarClass = (index: number) => {
    return strength >= index + 1 ? 'active' : 'inactive';
  };
</script>

<div role="img" aria-label="Signal Strength Indicator" class="signal-strength-indicator">
  {#each Array(maxStrength) as _, index}
    <div
      class="bar {getBarClass(index)}"
      aria-hidden="true"
    ></div>
  {/each}
</div>

<style lang="css">
  @import './SignalStrengthIndicator.css';
</style>