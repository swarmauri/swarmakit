<script lang="ts">
  export let status: 'seen' | 'unseen' | 'delivered' | 'failed' = 'unseen';

  function getStatusClass() {
    return `status-${status}`;
  }
</script>

<div class="read-receipt {getStatusClass()}" aria-label="{status}">
  <span class="icon"></span>
</div>

<style lang="css">
  @import './ReadReceipt.css';
</style>