<script lang="ts">
  export type GridState = 'empty' | 'populated' | 'responsive' | 'stretched' | 'aligned';
  export let state: GridState = 'empty';
  export let items: string[] = [];
</script>

<div
  class="grid"
  class:empty={state === 'empty'}
  class:populated={state === 'populated'}
  class:responsive={state === 'responsive'}
  class:stretched={state === 'stretched'}
  class:aligned={state === 'aligned'}
  role="grid"
>
  {#if items.length > 0}
    {#each items as item}
      <div class="grid-item" role="gridcell">
        {item}
      </div>
    {/each}
  {:else}
    <div class="grid-empty" role="gridcell">No items available</div>
  {/if}
</div>

<style lang="css">
  @import './Grid.css';
</style>