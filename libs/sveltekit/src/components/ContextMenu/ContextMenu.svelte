<script lang="ts">
  import { onMount } from 'svelte';

  export let isVisible: boolean = false;
  export let menuItems: Array<{ label: string; action: () => void }> = [];
  export let position: { x: number, y: number } = { x: 0, y: 0 };

  const toggleVisibility = () => {
    isVisible = !isVisible;
  };

  const handleAction = (action: () => void) => {
    action();
    isVisible = false;
  };

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    position = { x: event.clientX, y: event.clientY };
    toggleVisibility();
  };

  onMount(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });
</script>

<div class="context-menu-container">
  <div role="button" tabindex="0" class="context-trigger">
    Right-click or tap-and-hold here
  </div>

  {#if isVisible}
    <div class="context-menu" style="top: {position.y}px; left: {position.x}px;" role="menu">
      {#each menuItems as { label, action }}
        <div
          class="menu-item"
          role="menuitem"
          tabindex="0"
          on:click={() => handleAction(action)}
          on:keypress={(event) => event.key === 'Enter' || event.key === ' ' ? handleAction(action) : null}
        >
          {label}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="css">
  @import './ContextMenu.css';
</style>