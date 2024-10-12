<script lang="ts">
  import { onMount } from 'svelte';

  export let items: { label: string; action: () => void }[] = [];
  export let isVisible: boolean = false;
  export let activeIndex: number | null = null;

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleVisibility();
    }
  };

  const toggleVisibility = () => {
    isVisible = !isVisible;
  };

  const activateItem = (index: number) => {
    activeIndex = index;
    items[index].action();
  };

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target.closest('.off-canvas-navigation')) {
        isVisible = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="off-canvas-navigation" role="navigation">
  <button class="nav-trigger" aria-haspopup="true" aria-expanded={isVisible} on:click={toggleVisibility} on:keydown={handleKeydown}>
    ☰
  </button>
  <div class="nav-panel" class:visible={isVisible}>
    <ul class="nav-items" role="menu">
      {#each items as item, index}
        <li class={`nav-item ${activeIndex === index ? 'active' : ''}`} role="menuitem">
          <button class="item-link" on:click={() => activateItem(index)}>{item.label}</button>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="css">
  @import './Off-CanvasNavigation.css';
</style>