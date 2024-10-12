<script lang="ts">
  export type HeatmapState = 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'hovered';
  export let state: HeatmapState = 'rendered';

  let heatmapData: number[][] = [];
  if (state === 'rendered' || state === 'zoomed' || state === 'tooltipVisible' || state === 'hovered') {
    heatmapData = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.random()));
  }

  let tooltip: { x: number; y: number; value: number } | null = null;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'hovered') {
      console.log('Cell clicked');
    }
  }

  function showTooltip(x: number, y: number, value: number) {
    if (state === 'tooltipVisible') {
      tooltip = { x, y, value };
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="heatmap" role="img" aria-label="Heatmap">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <div class="grid">
      {#each heatmapData as row, rowIndex}
        {#each row as value, colIndex}
          <div
            class="cell"
            style="background-color: hsl(200, 70%, {100 - value * 100}%)"
            tabindex="0"
            on:click={handleClick}
            on:keydown={handleKeydown}
            on:mouseover={() => showTooltip(rowIndex, colIndex, value)}
            on:mouseout={hideTooltip}
          ></div>
        {/each}
      {/each}
    </div>
    {#if tooltip}
      <div class="tooltip" style="left: {tooltip.x * 10}%; top: {tooltip.y * 10}%;">
        Value: {tooltip.value.toFixed(2)}
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './Heatmap.css';
</style>