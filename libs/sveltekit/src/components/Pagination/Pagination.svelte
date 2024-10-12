<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let totalPages: number = 1;
  export let currentPage: number = 1;

  const dispatch = createEventDispatcher();

  function selectPage(page: number) {
    if (page < 1 || page > totalPages) return;
    dispatch('change', { page });
  }

  function handleKeydown(event: KeyboardEvent, page: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectPage(page);
    }
  }
</script>

<nav aria-label="Pagination Navigation">
  <ul class="pagination">
    {#each Array(totalPages) as _, index}
      <li
        class="pagination-item"
        class:active={currentPage === index + 1}
        role="button"
        aria-current={currentPage === index + 1 ? 'page' : undefined}
        aria-label={`Page ${index + 1}`}
        tabindex="0"
        on:click={() => selectPage(index + 1)}
        on:keydown={(event) => handleKeydown(event, index + 1)}
      >
        {index + 1}
      </li>
    {/each}
  </ul>
</nav>

<style lang="css">
  @import './Pagination.css';
</style>