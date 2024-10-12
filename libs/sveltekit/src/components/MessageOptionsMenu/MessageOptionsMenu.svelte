<script lang="ts">
  export let isVisible: boolean = false;
  export let isClicked: boolean = false;

  function toggleMenu() {
    isClicked = !isClicked;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  }
</script>

<div
  class="message-options-menu"
  role="menu"
  tabindex="0"
  on:click={toggleMenu}
  on:keydown={handleKeydown}
>
  <button aria-haspopup="true" aria-expanded={isVisible} on:click={() => isVisible = !isVisible}>
    Options
  </button>
  {#if isVisible}
    <ul>
      <li role="menuitem">Option 1</li>
      <li role="menuitem">Option 2</li>
      <li role="menuitem">Option 3</li>
    </ul>
  {/if}
</div>

<style lang="css">
  @import './MessageOptionsMenu.css';
</style>