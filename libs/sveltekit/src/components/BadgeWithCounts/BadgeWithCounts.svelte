<script lang="ts">
  export let count: number = 0;
  export let maxCount: number = 99;
</script>

<div class="badge-with-counts" role="status" aria-live="polite">
  {#if count === 0}
    <span class="count zero" aria-label="No notifications">0</span>
  {:else if count > maxCount}
    <span class="count overflow" aria-label="More than {maxCount}+ notifications">{maxCount}+</span>
  {:else}
    <span class="count active" aria-label="{count} notifications">{count}</span>
  {/if}
</div>

<style lang="css">
  .badge-with-counts {
    display: inline-block;
    padding: 0.5em;
    border-radius: 12px;
    background-color: #ff9800;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 600;
    min-width: 24px;
    text-align: center;
  }

  .count.zero {
    background-color: #e0e0e0;
    color: #333;
  }

  .count.active {
    background-color: #ff9800;
    color: #fff;
  }

  .count.overflow {
    background-color: #f44336;
    color: #fff;
  }
</style>