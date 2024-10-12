<script lang="ts">
  export interface ListItem {
    id: number;
    content: string;
    selected: boolean;
    disabled?: boolean;
  }

  export let items: ListItem[] = [];
  export let onItemClick: (id: number) => void;

  function handleItemClick(item: ListItem) {
    if (item.disabled) return;
    onItemClick(item.id);
  }
</script>

<ol class="numbered-list">
  {#each items as item}
    <li
      class:disabled={item.disabled}
      class:selected={item.selected}
      on:click={() => handleItemClick(item)}
      on:keydown={(e) => e.key === 'Enter' && handleItemClick(item)}
      tabindex={item.disabled ? -1 : 0}
      role="listitem"
      aria-selected={item.selected}
      aria-disabled={item.disabled}
    >
      {item.content}
    </li>
  {/each}
</ol>

<style lang="css">
  @import './NumberedList.css';
</style>