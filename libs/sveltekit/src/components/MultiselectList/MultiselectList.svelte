<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let items: Array<{ id: number; name: string; selected: boolean }> = [];
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function toggleItemSelection(itemId: number) {
    if (!disabled) {
      const updatedItems = items.map(item =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      );
      dispatch('update', updatedItems);
    }
  }
</script>

<ul class="multiselect-list" aria-disabled={disabled}>
  {#each items as item (item.id)}
    <li
      class="multiselect-item"
      class:selected={item.selected}
      on:click={() => toggleItemSelection(item.id)}
      aria-selected={item.selected}
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && toggleItemSelection(item.id)}
    >
      {item.name}
    </li>
  {/each}
</ul>

<style lang="css">
  .multiselect-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .multiselect-item {
    padding: 8px;
    margin: 4px 0;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  .multiselect-item:hover:not(.selected) {
    background-color: #e0e0e0;
  }

  .multiselect-item.selected {
    background-color: #007bff;
    color: #ffffff;
  }

  .multiselect-list[aria-disabled='true'] .multiselect-item {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>