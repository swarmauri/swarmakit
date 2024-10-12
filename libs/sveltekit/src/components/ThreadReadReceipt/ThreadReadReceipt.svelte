<script lang="ts">
  export type ReceiptState = 'seen' | 'unseen' | 'delivered' | 'failed';
  export let state: ReceiptState = 'unseen';

  function getIcon() {
    switch (state) {
      case 'seen':
        return '👁️';
      case 'delivered':
        return '✅';
      case 'failed':
        return '❌';
      default:
        return '📩';
    }
  }
</script>

<div class="read-receipt" aria-label={`Message ${state}`}>
  {getIcon()}
</div>

<style lang="css">
  @import './ThreadReadReceipt.css';
</style>