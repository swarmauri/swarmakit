<script lang="ts">
  export let count: number = 0;
  export let visible: boolean = true;
</script>

{#if visible}
  <div class="unread-message-counter" aria-label="Unread messages">
    {count}
  </div>
{/if}

<style lang="css">
  @import './UnreadMessageCounter.css';
</style>