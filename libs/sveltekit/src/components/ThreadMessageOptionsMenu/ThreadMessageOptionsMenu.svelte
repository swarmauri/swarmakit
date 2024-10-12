<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let isVisible: boolean = false;
  const dispatch = createEventDispatcher();

  function toggleMenu() {
    isVisible = !isVisible;
    dispatch('toggle', { isVisible });
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  }
</script>

<div class="menu-container">
  <div 
    class="menu-button" 
    role="button" 
    tabindex="0" 
    on:click={toggleMenu} 
    on:keydown={handleKeyDown}
    aria-expanded={isVisible}
    aria-label="Toggle message options menu">
    ⋮
  </div>
  {#if isVisible}
    <ul class="menu" role="menu">
      <li role="menuitem">Reply</li>
      <li role="menuitem">Edit</li>
      <li role="menuitem">Delete</li>
    </ul>
  {/if}
</div>

<style lang="css">
  @import './ThreadMessageOptionsMenu.css';
</style>