<script lang="ts">
  export let label: string = 'Scroll';
  export let isVisible: boolean = true;
  let isHovered: boolean = false;
  let isClicked: boolean = false;

  function handleClick() {
    if (isVisible) {
      isClicked = true;
      setTimeout(() => (isClicked = false), 200);
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && isVisible) {
      handleClick();
    }
  }
</script>

<div
  class="scroll-button"
  role="button"
  tabindex={isVisible ? 0 : -1}
  on:click={handleClick}
  on:keydown={handleKeyDown}
  on:mouseover={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  aria-hidden={!isVisible}
>
  {label}
</div>

<style lang="css">
  @import './ThreadScrollButton.css';
</style>