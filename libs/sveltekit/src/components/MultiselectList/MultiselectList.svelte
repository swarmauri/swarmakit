<script lang="ts">
  import { writable } from 'svelte/store';

  export interface Item {
    id: number;
    name: string;
    selected: boolean;
    disabled?: boolean;
  }

  export let items: Item[] = [];
  export let onSelect: (id: number) => void;

  function toggleSelection(item: Item) {
    if (item.disabled) return;
    item.selected = !item.selected;
    onSelect(item.id);
  }
</script>

<ul class="multiselect-list">
  {#each items as item}
    <li
      class:disabled={item.disabled}
      class:selected={item.selected}
      on:click={() => toggleSelection(item)}
      on:keydown={(e) => e.key === 'Enter' && toggleSelection(item)}
      tabindex={item.disabled ? -1 : 0}
      role="option"
      aria-selected={item.selected}
      aria-disabled={item.disabled}
    >
      {item.name}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './MultiselectList.css';
</style>