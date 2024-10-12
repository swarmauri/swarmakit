<script lang="ts">
  export interface Item {
    id: number;
    title: string;
    details: string;
    selected: boolean;
  }

  export let items: Item[] = [];
  export let onItemSelect: (id: number) => void;
  export let onToggleDetails: (id: number) => void;

  function handleSelect(item: Item) {
    onItemSelect(item.id);
  }

  function handleToggleDetails(item: Item) {
    onToggleDetails(item.id);
  }
</script>

<div class="selectable-list" role="listbox">
  {#each items as item (item.id)}
    <div
      class:selected={item.selected}
      role="option"
      aria-selected={item.selected}
      tabindex="0"
      on:click={() => handleSelect(item)}
      on:keydown={(e) => e.key === 'Enter' && handleSelect(item)}
    >
      <span>{item.title}</span>
      <button
        aria-expanded={item.selected}
        on:click|stopPropagation={() => handleToggleDetails(item)}
        on:keydown|stopPropagation={(e) => e.key === 'Enter' && handleToggleDetails(item)}
      >
        {item.selected ? 'Close Details' : 'Open Details'}
      </button>
      {#if item.selected}
        <div class="item-details">
          {item.details}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  @import './SelectableListWithItemDetails.css';
</style>