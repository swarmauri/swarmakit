<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum ListState {
    Default = 'default',
    ActionTriggered = 'actionTriggered',
    Dismissed = 'dismissed'
  }

  export let state: ListState = ListState.Default;
  export let items: { label: string; action: () => void }[] = [];

  const dispatch = createEventDispatcher();

  function handleItemClick(item: { label: string; action: () => void }) {
    item.action();
    state = ListState.ActionTriggered;
    dispatch('action', { item });
  }

  function dismissList() {
    state = ListState.Dismissed;
    dispatch('dismiss');
  }

  function handleKeyDown(event: KeyboardEvent, item: { label: string; action: () => void }) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleItemClick(item);
    }
  }
</script>

<div class="contextual-list" hidden={state === ListState.Dismissed}>
  <ul class="list">
    {#each items as item}
      <li
        role="button"
        tabindex="0"
        on:click={() => handleItemClick(item)}
        on:keydown={(event) => handleKeyDown(event, item)}
      >
        {item.label}
      </li>
    {/each}
  </ul>
  <button on:click={dismissList}>Dismiss</button>
</div>

<style lang="css">
  @import './ContextualList.css';
</style>