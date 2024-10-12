<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum MenuState {
    Expanded = 'expanded',
    Collapsed = 'collapsed',
    Hover = 'hover',
    Active = 'active'
  }

  export let state: MenuState = MenuState.Collapsed;
  export let items: { label: string; active?: boolean }[] = [];

  const dispatch = createEventDispatcher();

  function toggleMenu() {
    state = state === MenuState.Expanded ? MenuState.Collapsed : MenuState.Expanded;
    dispatch('toggle', { state });
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  }
</script>

<div class="collapsible-menu">
  <div
    class="menu-header"
    role="button"
    aria-expanded={state === MenuState.Expanded}
    tabindex="0"
    on:click={toggleMenu}
    on:keydown={handleKeyDown}
    class:active={state === MenuState.Active}
    class:hover={state === MenuState.Hover}
  >
    Menu
  </div>
  {#if state === MenuState.Expanded}
    <ul class="menu-list">
      {#each items as { label, active }}
        <li class:active={active}>{label}</li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './CollapsibleMenuList.css';
</style>