<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export type ListItem = {
    id: number;
    text: string;
    disabled?: boolean;
  };

  export let items: ListItem[] = [];
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      dispatch('endOfList');
    }
  }
</script>

<div
  class="scrollable-list"
  on:scroll={handleScroll}
  aria-disabled={disabled}
  tabindex={disabled ? -1 : 0}
>
  {#each items as item (item.id)}
    <div
      class="scrollable-list-item"
      class:hover={!disabled}
      class:disabled={item.disabled}
      role="listitem"
      aria-disabled={item.disabled}
    >
      {item.text}
    </div>
  {/each}
</div>

<style lang="css">
  @import './ScrollableList.css';
</style>