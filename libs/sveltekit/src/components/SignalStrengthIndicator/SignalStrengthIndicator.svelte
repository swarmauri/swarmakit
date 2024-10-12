<script lang="ts">
  export let strength: number = 0; // Range from 0 to 4
</script>

<div class="signal-strength-indicator" role="img" aria-label={`Signal strength: ${strength}`}>
  {#each Array(4) as _, index}
    <div class="bar {strength > index ? 'active' : ''}" aria-hidden="true"></div>
  {/each}
</div>

<style lang="css">
  @import './SignalStrengthIndicator.css';
</style>