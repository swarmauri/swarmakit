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
      if (!event.target.closest('.dropdown-menu')) {
        isExpanded = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="dropdown-menu" role="menu">
  <button class="dropdown-trigger" aria-haspopup="true" aria-expanded={isExpanded} on:click={toggleExpanded} on:keydown={handleKeydown}>
    Menu
  </button>
  {#if isExpanded}
    <ul class="dropdown-list" role="menu">
      {#each items as item, index}
        <li class={`dropdown-item ${activeIndex === index ? 'active' : ''}`} role="menuitem">
          <button class="dropdown-link" on:click={() => activateItem(index)}>{item.label}</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './DropdownMenu.css';
</style>