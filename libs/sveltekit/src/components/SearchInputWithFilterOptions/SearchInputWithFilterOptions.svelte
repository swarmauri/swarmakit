<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let placeholder: string = 'Search...';
  export let query: string = '';
  export let filtersActive: boolean = false;
  export let disabled: boolean = false;
  export let noResults: boolean = false;

  const dispatch = createEventDispatcher();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    query = target.value;
    dispatch('input', { query });
  }

  function handleFilterClick() {
    if (!disabled) {
      filtersActive = !filtersActive;
      dispatch('filterToggle', { filtersActive });
    }
  }
</script>

<div class="search-input-container" aria-disabled={disabled}>
  <input
    type="text"
    bind:value={query}
    placeholder={placeholder}
    on:input={handleInput}
    disabled={disabled}
    aria-label="Search input"
  />
  <button
    on:click={handleFilterClick}
    aria-pressed={filtersActive}
    disabled={disabled}
    aria-label="Toggle filters"
  >
    Filters
  </button>
  {#if noResults}
    <p class="no-results-message">No results found</p>
  {/if}
</div>

<style lang="css">
  @import './SearchInputWithFilterOptions.css';
</style>