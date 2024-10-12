<script lang="ts">
  export let isActive: boolean = false;
</script>

{#if isActive}
  <div class="spinner" role="status" aria-live="polite" aria-label="Loading">
    <div class="circle"></div>
  </div>
{/if}

<style lang="css">
  @import './LoadingSpinner.css';
</style>