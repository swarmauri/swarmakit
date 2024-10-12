<script lang="ts">
  export let isEnabled: boolean = true;
  export let isHovered: boolean = false;
  export let isClicked: boolean = false;

  function handleClick(event: MouseEvent) {
    if (!isEnabled) return;
    isClicked = !isClicked;
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(event as unknown as MouseEvent);
    }
  }
</script>

<button
  class={`reply-button ${isEnabled ? 'enabled' : 'disabled'} ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
  on:click={handleClick}
  on:keydown={handleKeyPress}
  aria-pressed={isClicked}
  disabled={!isEnabled}
>
  Reply
</button>

<style lang="css">
  @import './ThreadReplyButton.css';
</style>