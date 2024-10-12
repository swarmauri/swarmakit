<script lang="ts">
  export let disabled: boolean = false;
  export let label: string = 'Send';

  function handleClick() {
    if (!disabled) {
      // Handle send action
    }
  }
</script>

<button
  class="send-button"
  on:click={handleClick}
  disabled={disabled}
  aria-disabled={disabled}
>
  {label}
</button>

<style lang="css">
  @import './SendButton.css';
</style>