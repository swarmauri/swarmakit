<script lang="ts">
  export let type: 'default' | 'notification' | 'status' = 'default';
  export let label: string = '';
</script>

<div class="badge" class:type>
  {#if type === 'notification'}
    <span class="notification" aria-label="Notification">{label}</span>
  {:else if type === 'status'}
    <span class="status" aria-label="Status">{label}</span>
  {:else}
    <span class="default" aria-label="Badge">{label}</span>
  {/if}
</div>

<style lang="css">
  .badge {
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .default {
    background-color: #e0e0e0;
    color: #333;
  }

  .notification {
    background-color: #ff9800;
    color: #fff;
  }

  .status {
    background-color: #4caf50;
    color: #fff;
  }
</style>