<script lang="ts">
  import { onMount } from 'svelte';

  export let items: { label: string; action: () => void }[] = [];
  export let isVisible: boolean = false;

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleVisibility();
    }
  };

  const toggleVisibility = () => {
    isVisible = !isVisible;
  };

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target.closest('.contextual-nav')) {
        isVisible = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="contextual-nav" role="navigation">
  <button class="contextual-trigger" aria-haspopup="true" aria-expanded={isVisible} on:click={toggleVisibility} on:keydown={handleKeydown}>
    Toggle Menu
  </button>
  {#if isVisible}
    <ul class="contextual-menu" role="menu">
      {#each items as item}
        <li class="contextual-item" role="menuitem">
          <button class="contextual-link" on:click={item.action}>{item.label}</button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './ContextualNavigation.css';
</style>