<script lang="ts">
  export let query: string = '';
  export let disabled: boolean = false;
  export let filters: string[] = [];
  export let activeFilters: string[] = [];

  function handleInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    query = target.value;
  }

  function toggleFilter(filter: string) {
    if (activeFilters.includes(filter)) {
      activeFilters = activeFilters.filter(f => f !== filter);
    } else {
      activeFilters = [...activeFilters, filter];
    }
  }
</script>

<div class="search-input-with-filters">
  <input
    type="text"
    class="search-input"
    bind:value={query}
    on:input={handleInput}
    placeholder="Search..."
    disabled={disabled}
    aria-disabled={disabled}
  />
  <div class="filters">
    {#each filters as filter}
      <button
        type="button"
        class="filter-button"
        on:click={() => toggleFilter(filter)}
        aria-pressed={activeFilters.includes(filter)}
      >
        {filter}
      </button>
    {/each}
  </div>
</div>

<style lang="css">
  .search-input-with-filters {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .search-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .search-input:disabled {
    background-color: #f5f5f5;
  }

  .filters {
    display: flex;
    gap: 4px;
  }

  .filter-button {
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
  }

  .filter-button[aria-pressed="true"] {
    background-color: #66afe9;
    color: #fff;
  }
</style>