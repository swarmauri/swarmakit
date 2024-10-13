<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let currentPage: number = 1;
  export let totalPages: number = 1;

  const dispatch = createEventDispatcher();

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      dispatch('pageChange', page);
    }
  }
</script>

<nav aria-label="Pagination Navigation" class="pagination">
  <button
    class="pagination-button"
    on:click={() => goToPage(currentPage - 1)}
    aria-disabled={currentPage === 1}
  >
    Previous
  </button>

  {#each Array(totalPages) as _, index}
    <button
      class="pagination-button"
      class:active={currentPage === index + 1}
      on:click={() => goToPage(index + 1)}
      aria-current={currentPage === index + 1 ? 'page' : undefined}
    >
      {index + 1}
    </button>
  {/each}

  <button
    class="pagination-button"
    on:click={() => goToPage(currentPage + 1)}
    aria-disabled={currentPage === totalPages}
  >
    Next
  </button>
</nav>

<style lang="css">
  .pagination {
    display: flex;
    gap: 4px;
    justify-content: center;
  }

  .pagination-button {
    padding: 8px 12px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .pagination-button:hover:not([aria-disabled='true']):not(.active) {
    background-color: #e0e0e0;
  }

  .pagination-button:disabled,
  .pagination-button[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .pagination-button.active {
    background-color: #007bff;
    color: #ffffff;
  }
</style>