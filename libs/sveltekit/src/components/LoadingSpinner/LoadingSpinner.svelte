<script lang="ts">
  export let active: boolean = false;
</script>

<div class="loading-spinner" role="status" aria-live={active ? 'polite' : 'off'} aria-hidden={!active}>
  {#if active}
    <div class="spinner" aria-label="Loading"></div>
  {/if}
</div>

<style lang="css">
  @import './LoadingSpinner.css';
</style>