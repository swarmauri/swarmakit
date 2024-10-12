<script lang="ts">
  export interface Item {
    id: number;
    text: string;
    disabled: boolean;
  }

  export let items: Item[] = [];
  export let onItemSelect: (id: number) => void;
  export let isDisabled: boolean = false;

  function handleSelect(item: Item) {
    if (!item.disabled && !isDisabled) {
      onItemSelect(item.id);
    }
  }
</script>

<div class="scrollable-list" role="listbox" aria-disabled={isDisabled}>
  {#each items as item (item.id)}
    <div
      class:item-disabled={item.disabled || isDisabled}
      on:click={() => handleSelect(item)}
      on:keydown={(e) => e.key === 'Enter' && handleSelect(item)}
      role="option"
      tabindex="0"
    >
      {item.text}
    </div>
  {/each}
</div>

<style lang="css">
  @import './ScrollableList.css';
</style>