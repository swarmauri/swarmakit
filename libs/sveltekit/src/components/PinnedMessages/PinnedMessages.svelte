<script lang="ts">
  export let visible: boolean = true;
  export let pinned: boolean = false;
  export let messageContent: string = 'This is a pinned message';

  function togglePin() {
    pinned = !pinned;
  }
</script>

{#if visible}
  <div 
    class="pinned-message" 
    role="button" 
    aria-pressed={pinned}
    tabindex="0"
    on:click={togglePin} 
    on:keydown={(e) => e.key === 'Enter' ? togglePin() : null}
  >
    {messageContent}
  </div>
{/if}

<style lang="css">
  @import './PinnedMessages.css';
</style>