<script lang="ts">
  export type Status = 'online' | 'offline' | 'busy' | 'idle';
  export let status: Status = 'offline';
</script>

<div class="status-dot" role="status" aria-label={`Status: ${status}`} tabindex="0" on:keydown={(e) => e.key === 'Enter' && handleClick()}>
  <div class={`dot ${status}`}></div>
</div>

<script lang="ts">
  function handleClick() {
    // Handle click event
  }
</script>

<style lang="css">
  @import './StatusDots.css';
</style>