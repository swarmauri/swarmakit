<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum GridState {
    Paginated = 'paginated',
    Search = 'search',
    Resizable = 'resizable'
  }

  export let state: GridState = GridState.Paginated;
  export let columns: string[] = [];
  export let rows: Record<string, any>[] = [];
  export let pageSize: number = 5;
  export let searchQuery: string = '';

  const dispatch = createEventDispatcher();
  let currentPage = 0;

  function handleSearch() {
    dispatch('search', { query: searchQuery });
  }

  function handleResize() {
    dispatch('resize');
  }

  function nextPage() {
    if ((currentPage + 1) * pageSize < rows.length) {
      currentPage++;
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
    }
  }

  $: paginatedRows = rows.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  $: filteredRows = searchQuery.length > 0 
    ? rows.filter(row => Object.values(row).some(value => value.toString().includes(searchQuery)))
    : rows;
</script>

<div class="data-grid" on:resize={handleResize}>
  {#if state === GridState.Search}
    <input type="text" bind:value={searchQuery} on:input={handleSearch} placeholder="Search..." />
  {/if}
  <table>
    <thead>
      <tr>
        {#each columns as column}
          <th>{column}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each (state === GridState.Paginated ? paginatedRows : filteredRows) as row}
        <tr>
          {#each columns as column}
            <td>{row[column]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  {#if state === GridState.Paginated}
    <div class="pagination">
      <button on:click={prevPage} disabled={currentPage === 0}>Previous</button>
      <button on:click={nextPage} disabled={(currentPage + 1) * pageSize >= rows.length}>Next</button>
    </div>
  {/if}
</div>

<style lang="css">
  @import './DataGrid.css';
</style>