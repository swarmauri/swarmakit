<script lang="ts">
  export let isVisible: boolean = false;
  export let isHovered: boolean = false;
  export let isClicked: boolean = false;

  function handleScroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleScroll();
    }
  }
</script>

<div
  class="scroll-button"
  role="button"
  tabindex="0"
  on:click={handleScroll}
  on:keydown={handleKeydown}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
>
  {#if isVisible}
    <button aria-pressed={isClicked}>Scroll to Top</button>
  {/if}
</div>

<style lang="css">
  @import './ScrollButton.css';
</style>