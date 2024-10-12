<script lang="ts">
  export let state: 'open' | 'closed' | 'minimized' | 'maximized' = 'closed';

  function getStateClass() {
    return `state-${state}`;
  }

  function toggleWindow() {
    if (state === 'closed') {
      state = 'open';
    } else {
      state = 'closed';
    }
  }
</script>

<div class="chat-window {getStateClass()}" aria-expanded="{state !== 'closed'}" role="dialog">
  <button on:click={toggleWindow} on:keydown={(e) => e.key === 'Enter' && toggleWindow()} aria-label="Toggle Chat Window">
    Toggle
  </button>
  {#if state !== 'closed'}
    <div class="content">
      <p>Chat content goes here...</p>
    </div>
  {/if}
</div>

<style lang="css">
  @import './ChatWindow.css';
</style>