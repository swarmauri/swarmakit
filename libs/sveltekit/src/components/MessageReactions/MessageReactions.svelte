<script lang="ts">
  export let isAvailable: boolean = true;
  export let isHovered: boolean = false;
  export let isClicked: boolean = false;

  function handleClick() {
    if (isAvailable) {
      isClicked = !isClicked;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (isAvailable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleClick();
    }
  }
</script>

<div
  class="message-reactions"
  role="button"
  tabindex="0"
  aria-disabled="{!isAvailable}"
  on:click={handleClick}
  on:keydown={handleKeydown}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
>
  {#if isAvailable}
    <span>{isClicked ? 'Clicked' : isHovered ? 'Hovered' : 'React'}</span>
  {:else}
    <span>Unavailable</span>
  {/if}
</div>

<style lang="css">
  @import './MessageReactions.css';
</style>