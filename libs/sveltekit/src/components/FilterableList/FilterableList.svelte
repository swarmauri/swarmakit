<script lang="ts">
  import { writable } from 'svelte/store';

  export let items: Array<{ title: string }> = [];
  let filterText = writable('');

  $: filteredItems = $filterText
    ? items.filter((item) =>
        item.title.toLowerCase().includes($filterText.toLowerCase())
      )
    : items;

  function clearFilter() {
    filterText.set('');
  }
</script>

<div class="filterable-list">
  <input
    type="text"
    placeholder="Filter items..."
    bind:value={$filterText}
    aria-label="Filter items"
  />
  <button on:click={clearFilter} aria-label="Clear filter">
    Clear
  </button>

  <ul>
    {#if filteredItems.length > 0}
      {#each filteredItems as item}
        <li class="list-item">{item.title}</li>
      {/each}
    {:else}
      <li class="no-results">No results found</li>
    {/if}
  </ul>
</div>

<style lang="css">
  .filterable-list {
    margin: 0;
    padding: 0;
  }

  input[type='text'] {
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 8px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .list-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .no-results {
    padding: 10px;
    color: #999;
  }
</style>