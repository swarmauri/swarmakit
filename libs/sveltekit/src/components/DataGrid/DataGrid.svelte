<script lang="ts">
  export let columns: string[] = [];
  export let data: Array<Record<string, any>> = [];
  export let currentPage: number = 1;
  export let pageSize: number = 10;
  export let searchTerm: string = '';

  let resizableColumns: boolean = false;

  $: filteredData = searchTerm 
    ? data.filter(row => columns.some(column => (row[column] || '').toString().toLowerCase().includes(searchTerm.toLowerCase())))
    : data;

  $: paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function goToPage(page: number) {
    currentPage = page;
  }
</script>

<div class="data-grid">
  <input
    type="text"
    placeholder="Search..."
    bind:value={searchTerm}
    aria-label="Search data grid"
  />

  <table>
    <thead>
      <tr>
        {#each columns as column}
          <th class:resizable={resizableColumns}>{column}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each paginatedData as row}
        <tr>
          {#each columns as column}
            <td>{row[column]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="pagination-controls">
    <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
    <span>Page {currentPage}</span>
    <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage * pageSize >= filteredData.length}>Next</button>
  </div>
</div>

<style lang="css">
  .data-grid {
    width: 100%;
    overflow-x: auto;
  }

  input[type="text"] {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th.resizable {
    cursor: ew-resize;
  }

  .pagination-controls {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 5px 10px;
  }
</style>