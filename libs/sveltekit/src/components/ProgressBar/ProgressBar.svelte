<script lang="ts">
  export let progress: number = 0;
  export let disabled: boolean = false;

  function handleKeyDown(event: KeyboardEvent) {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      handleClick();
    }
  }

  function handleClick() {
    if (!disabled) {
      // Handle progress bar click logic
    }
  }
</script>

<div
  class="progress-bar-container"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={progress}
  aria-disabled={disabled}
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeyDown}>
  <div
    class="progress-bar"
    style="width: {progress}%;"
    aria-label="Progress bar with {progress}% completed">
  </div>
</div>

<style lang="css">
  @import './ProgressBar.css';
</style>