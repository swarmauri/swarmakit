<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let items: Array<{ id: number; name: string; selected: boolean }> = [];
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function selectItem(itemId: number) {
    if (!disabled) {
      const updatedItems = items.map(item =>
        item.id === itemId ? { ...item, selected: true } : { ...item, selected: false }
      );
      dispatch('update', updatedItems);
    }
  }
</script>

<ol class="numbered-list" aria-disabled={disabled}>
  {#each items as item (item.id)}
    <li
      class="numbered-item"
      class:selected={item.selected}
      on:click={() => selectItem(item.id)}
      aria-selected={item.selected}
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && selectItem(item.id)}
    >
      {item.name}
    </li>
  {/each}
</ol>

<style lang="css">
  .numbered-list {
    padding: 0;
    margin: 0;
  }

  .numbered-item {
    padding: 8px;
    margin: 4px 0;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  .numbered-item:hover:not(.selected) {
    background-color: #e0e0e0;
  }

  .numbered-item.selected {
    background-color: #007bff;
    color: #ffffff;
  }

  .numbered-list[aria-disabled='true'] .numbered-item {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>