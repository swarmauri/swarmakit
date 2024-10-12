<script lang="ts">
  export let message: string;
  export let isRead: boolean = false;
  export let isHovered: boolean = false;
  export let isActive: boolean = false;

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  function handleClick() {
    isActive = !isActive;
  }
</script>

<div
  class="chat-bubble"
  class:read={isRead}
  class:hovered={isHovered}
  class:active={isActive}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:click={handleClick}
  role="button"
  tabindex="0"
  on:keypress={(e) => e.key === 'Enter' && handleClick()}
>
  {message}
</div>

<style lang="css">
  @import './ChatBubble.css';
</style>