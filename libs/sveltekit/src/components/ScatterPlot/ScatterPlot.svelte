<script lang="ts">
  export type PlotState = 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'highlighted' | 'clustered';
  export let state: PlotState = 'rendered';

  let plotData: { x: number; y: number }[] = [];
  if (state === 'rendered' || state === 'zoomed' || state === 'highlighted' || state === 'clustered') {
    plotData = Array.from({ length: 100 }, () => ({
      x: Math.random() * 10,
      y: Math.random() * 10,
    }));
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'highlighted') {
      console.log('Point clicked');
    }
  }
</script>

<div class="scatter-plot" role="img" aria-label="Scatter Plot">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 10 10">
      {#each plotData as { x, y }, index (index)}
        <circle
          cx={x}
          cy={y}
          r={state === 'highlighted' ? 0.2 : 0.1}
          fill={state === 'clustered' ? 'blue' : 'red'}
          class="point"
          tabindex="0"
          on:click={handleClick}
          on:keydown={handleKeydown}
        />
      {/each}
      {#if state === 'tooltipVisible'}
        <text x="5" y="1" class="tooltip">Tooltip Visible</text>
      {/if}
    </svg>
  {/if}
</div>

<style lang="css">
  @import './ScatterPlot.css';
</style>