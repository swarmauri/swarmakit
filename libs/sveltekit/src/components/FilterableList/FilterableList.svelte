<script lang="ts">
  import { writable } from 'svelte/store';

  export type ListItem = { id: number; title: string; };
  export let items: ListItem[] = [];
  export let filterText: string = '';

  const filteredItems = writable(items);

  $: {
    filteredItems.set(filterText ? items.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase())) : items);
  }

  function clearFilter() {
    filterText = '';
  }
</script>

<div class="filterable-list">
  <input
    type="text"
    bind:value={filterText}
    placeholder="Filter items..."
    aria-label="Filter items"
  />
  <button on:click={clearFilter} aria-label="Clear filter">Clear Filter</button>
  <ul>
    {#each $filteredItems as { id, title }}
      <li class="list-item" role="listitem">
        {title}
      </li>
    {:else}
      <li class="no-results" role="listitem">No results found</li>
    {/each}
  </ul>
</div>

<style lang="css">
  @import './FilterableList.css';
</style>