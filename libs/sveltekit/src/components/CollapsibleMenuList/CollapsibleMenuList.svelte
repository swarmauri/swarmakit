<script lang="ts">
  export type MenuState = 'expanded' | 'collapsed' | 'hover' | 'active';
  export let state: MenuState = 'collapsed';
  export let menuItems: { label: string; active: boolean }[] = [];
  let isExpanded: boolean = state === 'expanded';

  function toggleMenu() {
    isExpanded = !isExpanded;
  }

  function handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  }
</script>

<div class={`collapsible-menu-list menu-${state}`}>
  <div
    class="menu-header"
    role="button"
    tabindex="0"
    aria-expanded={isExpanded}
    on:click={toggleMenu}
    on:keydown={handleKey}
  >
    Menu
  </div>
  {#if isExpanded}
    <ul>
      {#each menuItems as { label, active }}
        <li class:active={active}>{label}</li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './CollapsibleMenuList.css';
</style>