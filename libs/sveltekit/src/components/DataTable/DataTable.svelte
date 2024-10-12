<script lang="ts">
  export type DataTableState = 'loading' | 'rendered' | 'empty' | 'sorted' | 'filtered' | 'paginated' | 'selected';
  export let state: DataTableState = 'rendered';
  export let data: Array<{ [key: string]: any }> = [];
  export let columns: Array<string> = [];
</script>

{#if state === 'loading'}
  <div class="loading">Loading...</div>
{:else if state === 'empty' || data.length === 0}
  <div class="empty">No data available</div>
{:else}
  <table class="data-table">
    <thead>
      <tr>
        {#each columns as column}
          <th>{column}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          {#each columns as column}
            <td>{row[column]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style lang="css">
  @import './DataTable.css';
</style>