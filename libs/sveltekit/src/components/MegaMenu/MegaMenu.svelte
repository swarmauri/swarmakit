<script lang="ts">
  import { onMount } from 'svelte';

  export let sections: { title: string; items: { label: string; action: () => void }[] }[] = [];
  export let isExpanded: boolean = false;
  export let activeSectionIndex: number | null = null;
  export let activeItemIndex: number | null = null;

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleExpanded();
    }
  };

  const toggleExpanded = () => {
    isExpanded = !isExpanded;
  };

  const activateItem = (sectionIndex: number, itemIndex: number) => {
    activeSectionIndex = sectionIndex;
    activeItemIndex = itemIndex;
    sections[sectionIndex].items[itemIndex].action();
  };

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target.closest('.mega-menu')) {
        isExpanded = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="mega-menu" role="navigation">
  <button class="mega-menu-trigger" aria-haspopup="true" aria-expanded={isExpanded} on:click={toggleExpanded} on:keydown={handleKeydown}>
    Menu
  </button>
  {#if isExpanded}
    <div class="mega-menu-content">
      {#each sections as section, sectionIndex}
        <div class="section">
          <h3 class="section-title">{section.title}</h3>
          <ul class="section-items" role="menu">
            {#each section.items as item, itemIndex}
              <li class={`section-item ${activeSectionIndex === sectionIndex && activeItemIndex === itemIndex ? 'active' : ''}`} role="menuitem">
                <button class="item-link" on:click={() => activateItem(sectionIndex, itemIndex)}>{item.label}</button>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="css">
  @import './MegaMenu.css';
</style>