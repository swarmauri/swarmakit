<script lang="ts">
  export interface Column {
    key: string;
    title: string;
    sortable: boolean;
  }

  export interface Row {
    id: number;
    [key: string]: any;
  }

  export let columns: Column[] = [];
  export let rows: Row[] = [];
  export let onSort: (key: string) => void;
  export let onFilter: (key: string, value: string) => void;
  export let onSelectRow: (id: number) => void;

  let sortKey: string | null = null;

  function handleSort(column: Column) {
    if (column.sortable) {
      sortKey = column.key;
      onSort(column.key);
    }
  }

  function handleFilter(event: Event, column: Column) {
    const value = (event.target as HTMLInputElement).value;
    onFilter(column.key, value);
  }

  function handleRowSelect(row: Row) {
    onSelectRow(row.id);
  }
</script>

<table class="sortable-table">
  <thead>
    <tr>
      {#each columns as column}
        <th on:click={() => handleSort(column)} tabindex="0" role={column.sortable ? 'button' : undefined} on:keydown={(e) => e.key === 'Enter' && handleSort(column)}>
          {column.title}
          {#if column.sortable && sortKey === column.key}
            <span class="sort-indicator">▲</span>
          {/if}
          <input type="text" placeholder="Filter" on:input={(e) => handleFilter(e, column)} />
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr on:click={() => handleRowSelect(row)} tabindex="0" role="button" on:keydown={(e) => e.key === 'Enter' && handleRowSelect(row)}>
        {#each columns as column}
          <td>{row[column.key]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style lang="css">
  @import './SortableTable.css';
</style>