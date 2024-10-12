<script lang="ts">
  export type Status = 'sent' | 'delivered' | 'failed' | 'read';
  export let status: Status = 'sent';
</script>

<div class="status-icon" aria-label={status} role="img">
  {#if status === 'sent'}
    <span class="icon sent">✓</span>
  {:else if status === 'delivered'}
    <span class="icon delivered">✓✓</span>
  {:else if status === 'failed'}
    <span class="icon failed">✗</span>
  {:else if status === 'read'}
    <span class="icon read">✓✓</span>
  {/if}
</div>

<style lang="css">
  @import './MessageDeliveryStatusIcon.css';
</style>