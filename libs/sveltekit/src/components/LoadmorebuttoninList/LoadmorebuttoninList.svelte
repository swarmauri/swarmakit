<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let isLoading: boolean = false;
  export let hasMore: boolean = true;

  const dispatch = createEventDispatcher();

  function loadMore() {
    if (!isLoading && hasMore) {
      dispatch('load');
    }
  }
</script>

<div class="load-more-button-container">
  {#if hasMore}
    <button 
      class="load-more-button" 
      on:click={loadMore} 
      disabled={isLoading}
      aria-busy={isLoading}
    >
      {#if isLoading}
        Loading...
      {:else}
        Load More
      {/if}
    </button>
  {:else}
    <p class="end-of-list">End of List</p>
  {/if}
</div>

<style lang="css">
  .load-more-button-container {
    display: flex;
    justify-content: center;
    padding: 16px;
  }

  .load-more-button {
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
  }

  .load-more-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .end-of-list {
    font-size: 14px;
    color: #888888;
  }
</style>