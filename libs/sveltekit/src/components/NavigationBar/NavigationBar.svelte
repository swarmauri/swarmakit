<script lang="ts">
  import { onMount } from 'svelte';

  export let items: { label: string; action: () => void }[] = [];
  export let isExpanded: boolean = false;
  export let activeIndex: number | null = null;

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleExpanded();
    }
  };

  const toggleExpanded = () => {
    isExpanded = !isExpanded;
  };

  const activateItem = (index: number) => {
    activeIndex = index;
    items[index].action();
  };

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target.closest('.navigation-bar')) {
        isExpanded = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="navigation-bar" role="navigation">
  <button class="nav-trigger" aria-haspopup="true" aria-expanded={isExpanded} on:click={toggleExpanded} on:keydown={handleKeydown}>
    ☰
  </button>
  <ul class="nav-items" class:expanded={isExpanded} role="menu">
    {#each items as item, index}
      <li class={`nav-item ${activeIndex === index ? 'active' : ''}`} role="menuitem">
        <button class="item-link" on:click={() => activateItem(index)}>{item.label}</button>
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  @import './NavigationBar.css';
</style>