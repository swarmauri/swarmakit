<script lang="ts">
  import { writable } from 'svelte/store';

  export enum ButtonState {
    Loading = 'loading',
    Default = 'default',
    EndOfList = 'endOfList'
  }

  export let state: ButtonState = ButtonState.Default;
  export let items: string[] = [];
  export let loadMore: () => void;

  let isLoading = writable(false);

  function handleLoadMore() {
    if (state === ButtonState.EndOfList) return;

    isLoading.set(true);
    loadMore();
    isLoading.set(false);
  }
</script>

<div class="list-container">
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>

  {#if state === ButtonState.EndOfList}
    <p class="end-of-list">No more items</p>
  {:else}
    <button
      on:click={handleLoadMore}
      disabled={$isLoading || state === ButtonState.Loading}
      aria-busy={$isLoading}
    >
      {state === ButtonState.Loading ? 'Loading...' : 'Load More'}
    </button>
  {/if}
</div>

<style lang="css">
  @import './LoadmorebuttoninList.css';
</style>