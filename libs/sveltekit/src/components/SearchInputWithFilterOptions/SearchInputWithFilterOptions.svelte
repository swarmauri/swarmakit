<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let searchTerm: string = '';
  export let filters: string[] = [];
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleSearchInput(event: Event) {
    if (!disabled) {
      searchTerm = (event.target as HTMLInputElement).value;
      dispatch('search', searchTerm);
    }
  }

  function handleFilterClick(filter: string) {
    if (!disabled) {
      dispatch('filter', filter);
    }
  }

  function handleKeyDown(event: KeyboardEvent, filter: string) {
    if (!disabled && event.key === 'Enter') {
      handleFilterClick(filter);
    }
  }
</script>

<div class="search-input-with-filters">
  <input
    type="text"
    bind:value={searchTerm}
    on:input={handleSearchInput}
    placeholder="Search..."
    disabled={disabled}
    aria-disabled={disabled}
  />

  <div class="filters" role="list">
    {#each filters as filter}
      <div
        class="filter"
        role="listitem"
        tabIndex={disabled ? -1 : 0}
        on:click={() => handleFilterClick(filter)}
        on:keydown={(event) => handleKeyDown(event, filter)}
        aria-disabled={disabled}
      >
        {filter}
      </div>
    {/each}
  </div>
</div>

<style lang="css">
  @import './SearchInputWithFilterOptions.css';
</style>