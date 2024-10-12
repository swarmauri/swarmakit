<script lang="ts">
  import { onMount } from 'svelte';

  export interface Item {
    id: number;
    content: string;
    disabled?: boolean;
  }

  export let items: Item[] = [];
  export let onSort: (sortedItems: Item[]) => void;

  let draggingItem: Item | null = null;

  function handleDragStart(item: Item, event: DragEvent) {
    if (item.disabled) return;
    draggingItem = item;
    event.dataTransfer?.setData('text/plain', JSON.stringify(item));
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function handleDrop(targetItem: Item, event: DragEvent) {
    if (draggingItem && !targetItem.disabled) {
      const draggedIndex = items.findIndex(i => i.id === draggingItem.id);
      const targetIndex = items.findIndex(i => i.id === targetItem.id);
      items.splice(draggedIndex, 1);
      items.splice(targetIndex, 0, draggingItem);
      draggingItem = null;
      onSort([...items]);
    }
  }
</script>

<ul class="sortable-list">
  {#each items as item (item.id)}
    <li
      class="sortable-item"
      draggable={!item.disabled}
      on:dragstart={event => handleDragStart(item, event)}
      on:dragover={handleDragOver}
      on:drop={event => handleDrop(item, event)}
      aria-disabled={item.disabled ? 'true' : 'false'}
    >
      {item.content}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './SortableList.css';
</style>