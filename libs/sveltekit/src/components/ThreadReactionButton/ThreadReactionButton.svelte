<script lang="ts">
  export let label: string = 'React';
  export let isAvailable: boolean = true;
  let isHovered: boolean = false;
  let isClicked: boolean = false;

  function handleClick() {
    if (isAvailable) {
      isClicked = true;
      setTimeout(() => (isClicked = false), 200);
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && isAvailable) {
      handleClick();
    }
  }
</script>

<div
  class="reaction-button"
  role="button"
  tabindex={isAvailable ? 0 : -1}
  on:click={handleClick}
  on:keydown={handleKeyDown}
  on:mouseover={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  aria-disabled={!isAvailable}
>
  {label}
</div>

<style lang="css">
  @import './ThreadReactionButton.css';
</style>