<script lang="ts">
  export let status: 'loading' | 'success' | 'error' = 'loading';
</script>

<div class="activity-indicator" class={status} role="status" aria-live="polite">
  {#if status === 'loading'}
    <span>Loading...</span>
  {:else if status === 'success'}
    <span>Success!</span>
  {:else if status === 'error'}
    <span>Error occurred.</span>
  {/if}
</div>

<style lang="css">
  @import './ActivityIndicators.css';
</style>