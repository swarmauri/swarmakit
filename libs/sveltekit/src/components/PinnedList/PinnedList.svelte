<script lang="ts">
  export interface Item {
    id: number;
    text: string;
    pinned: boolean;
    selected: boolean;
  }

  export let items: Item[] = [];
  export let onPinToggle: (id: number) => void;
  export let onSelect: (id: number) => void;

  function handlePinToggle(item: Item) {
    onPinToggle(item.id);
  }

  function handleSelect(item: Item) {
    onSelect(item.id);
  }
</script>

<ul class="pinned-list">
  {#each items as item}
    <li
      class:selected={item.selected}
      on:click={() => handleSelect(item)}
      on:keydown={(e) => e.key === 'Enter' && handleSelect(item)}
      role="button"
      tabindex="0"
    >
      <span>{item.text}</span>
      <button
        on:click={(e) => {
          e.stopPropagation();
          handlePinToggle(item);
        }}
        on:keydown={(e) => {
          if (e.key === 'Enter') {
            e.stopPropagation();
            handlePinToggle(item);
          }
        }}
        aria-label={item.pinned ? 'Unpin item' : 'Pin item'}
      >
        {item.pinned ? '📌' : '📍'}
      </button>
    </li>
  {/each}
</ul>

<style lang="css">
  @import './PinnedList.css';
</style>