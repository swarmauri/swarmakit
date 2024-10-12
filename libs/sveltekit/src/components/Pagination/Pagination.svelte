<script lang="ts">
  export interface Page {
    number: number;
    active: boolean;
  }

  export let pages: Page[] = [];
  export let onPageClick: (number: number) => void;

  function handlePageClick(page: Page) {
    if (!page.active) {
      onPageClick(page.number);
    }
  }
</script>

<nav class="pagination" aria-label="Pagination">
  <ul>
    {#each pages as page}
      <li>
        <button
          class:active={page.active}
          on:click={() => handlePageClick(page)}
          on:keydown={(e) => e.key === 'Enter' && handlePageClick(page)}
          aria-current={page.active ? 'page' : undefined}
          disabled={page.active}
        >
          {page.number}
        </button>
      </li>
    {/each}
  </ul>
</nav>

<style lang="css">
  @import './Pagination.css';
</style>