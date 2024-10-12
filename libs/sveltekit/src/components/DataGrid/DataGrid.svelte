<script lang="ts">
  export type GridState = 'paginated' | 'search' | 'resizable';
  export let state: GridState = 'paginated';
  export let data: { [key: string]: any }[] = [];
  export let columns: string[] = [];
  export let pageSize: number = 5;

  let currentPage: number = 1;
  let searchTerm: string = '';
  let filteredData = data;

  function paginateData() {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return filteredData.slice(start, end);
  }

  function handleSearch() {
    filteredData = data.filter(item =>
      columns.some(column => item[column].toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
    currentPage = 1;
  }

  function nextPage() {
    if (currentPage < Math.ceil(filteredData.length / pageSize)) currentPage++;
  }

  function prevPage() {
    if (currentPage > 1) currentPage--;
  }
</script>

{#if state === 'search'}
  <input
    type="text"
    placeholder="Search..."
    bind:value={searchTerm}
    on:input={handleSearch}
  />
{/if}

<table class={`data-grid grid-${state}`}>
  <thead>
    <tr>
      {#each columns as column}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each paginateData() as row}
      <tr>
        {#each columns as column}
          <td>{row[column]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

{#if state === 'paginated'}
  <div class="pagination-controls">
    <button on:click={prevPage} disabled={currentPage === 1} aria-label="Previous Page">Previous</button>
    <span>Page {currentPage}</span>
    <button on:click={nextPage} disabled={currentPage === Math.ceil(filteredData.length / pageSize)} aria-label="Next Page">Next</button>
  </div>
{/if}

<style lang="css">
  @import './DataGrid.css';
</style>