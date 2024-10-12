<script lang="ts">
  export let isEnabled: boolean = true;

  function handleClick(event: MouseEvent) {
    if (isEnabled) {
      // Trigger send action
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (isEnabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      // Trigger send action
    }
  }
</script>

<button
  class="send-button"
  class:enabled={isEnabled}
  class:disabled={!isEnabled}
  on:click={handleClick}
  on:keydown={handleKeyPress}
  aria-disabled={!isEnabled}
  role="button"
>
  Send
</button>

<style lang="css">
  @import './ThreadSendButton.css';
</style>