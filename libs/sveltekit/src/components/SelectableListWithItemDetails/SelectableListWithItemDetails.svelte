<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export type ListItem = {
    id: number;
    text: string;
    details: string;
    selected?: boolean;
  };

  export let items: ListItem[] = [];
  const dispatch = createEventDispatcher();

  function toggleSelection(item: ListItem) {
    if (!item.selected) {
      dispatch('itemSelected', item);
    } else {
      dispatch('itemDeselected', item);
    }
    item.selected = !item.selected;
  }

  function toggleDetails(item: ListItem) {
    item.detailsOpen = !item.detailsOpen;
    dispatch(item.detailsOpen ? 'detailsOpened' : 'detailsClosed', item);
  }
</script>

<div class="selectable-list" role="list">
  {#each items as item (item.id)}
    <div
      class="selectable-list-item"
      class:selected={item.selected}
      role="listitem"
      tabindex="0"
      on:click={() => toggleSelection(item)}
      on:keydown={(e) => e.key === "Enter" && toggleSelection(item)}
      aria-selected={item.selected}
    >
      <div>{item.text}</div>
      <button
        type="button"
        class="details-button"
        on:click={() => toggleDetails(item)}
        on:keydown={(e) => e.key === "Enter" && toggleDetails(item)}
      >
        {item.detailsOpen ? 'Hide Details' : 'Show Details'}
      </button>
      {#if item.detailsOpen}
        <div class="item-details">{item.details}</div>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  @import './SelectableListWithItemDetails.css';
</style>