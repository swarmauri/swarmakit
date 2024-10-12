<script lang="ts">
  import { onMount } from 'svelte';

  export let items: string[] = [];
  export let isLoadingMore: boolean = false;
  export let hasMoreItems: boolean = true;
  export let loadMoreItems: () => void;

  let listContainer: HTMLDivElement;

  function handleScroll() {
    const bottomThreshold = listContainer.scrollHeight - listContainer.scrollTop - listContainer.clientHeight < 100;
    if (bottomThreshold && hasMoreItems && !isLoadingMore) {
      loadMoreItems();
    }
  }

  onMount(() => {
    listContainer.addEventListener('scroll', handleScroll);
    return () => listContainer.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="virtualized-list" bind:this={listContainer}>
  {#each items as item, index}
    <div class="list-item" tabindex="0">
      {item}
    </div>
  {/each}
  {#if isLoadingMore}
    <div class="loading">Loading more items...</div>
  {/if}
  {#if !hasMoreItems}
    <div class="end-of-list">End of List</div>
  {/if}
</div>

<style lang="css">
  @import './VirtualizedList.css';
</style>