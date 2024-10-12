<script lang="ts">
  export let isVisible: boolean = true;
  export let isClicked: boolean = false;

  function handleClick() {
    isClicked = !isClicked;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
</script>

<div
  class="reply-indicator"
  role="button"
  tabindex="0"
  aria-pressed={isClicked}
  aria-hidden={!isVisible}
  on:click={handleClick}
  on:keydown={handleKeyDown}
>
  ↩ Reply
</div>

<style lang="css">
  @import './ThreadReplyIndicator.css';
</style>