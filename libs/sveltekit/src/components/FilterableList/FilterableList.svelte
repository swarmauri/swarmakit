<script lang="ts">
  import { writable } from 'svelte/store';

  export enum ListState {
    FilterApplied = 'filterApplied',
    NoResults = 'noResults',
    Default = 'default',
    ClearFilter = 'clearFilter'
  }

  export let state: ListState = ListState.Default;
  export let items: string[] = [];
  let filter = writable('');

  $: filteredItems = items.filter(item => item.toLowerCase().includes($filter.toLowerCase()));

  function clearFilter() {
    filter.set('');
  }
</script>

<div class="filterable-list">
  <input
    type="text"
    bind:value={$filter}
    placeholder="Type to filter..."
    aria-label="Filter items"
  />
  <button
    on:click={clearFilter}
  >
    Clear Filter
  </button>

  <ul>
    {#if state === ListState.NoResults || filteredItems.length === 0}
      <li>No results found</li>
    {:else}
      {#each filteredItems as item}
        <li>{item}</li>
      {/each}
    {/if}
  </ul>
</div>

<style lang="css">
  @import './FilterableList.css';
</style>