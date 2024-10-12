<script lang="ts">
  export let disabled: boolean = false;

  function handleClick() {
    if (!disabled) {
      // Handle attachment action
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      handleClick();
    }
  }
</script>

<div
  class="attachment-icon"
  role="button"
  tabindex={disabled ? -1 : 0}
  on:click={handleClick}
  on:keydown={handleKeydown}
  aria-disabled={disabled}
>
  📎
</div>

<style lang="css">
  @import './AttachmentIcon.css';
</style>