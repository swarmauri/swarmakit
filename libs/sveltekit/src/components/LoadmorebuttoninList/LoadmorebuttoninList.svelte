<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let loading = false;
  export let endOfList = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (!loading && !endOfList) {
      dispatch('loadMore');
    }
  }
</script>

<div class="load-more-container">
  <button 
    class="load-more-button" 
    disabled={loading || endOfList} 
    on:click={handleClick}
    aria-busy={loading}
    aria-disabled={loading || endOfList}>
    {#if loading}
      Loading...
    {:else if endOfList}
      No more items
    {:else}
      Load More
    {/if}
  </button>
</div>

<style lang="css">
  @import './LoadMoreButtonInList.css';
</style>