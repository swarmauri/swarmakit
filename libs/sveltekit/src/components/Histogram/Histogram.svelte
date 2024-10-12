<script lang="ts">
  export type HistogramState = 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'hovered';
  export let state: HistogramState = 'rendered';

  let histogramData: number[] = [];
  if (state === 'rendered' || state === 'zoomed' || state === 'tooltipVisible' || state === 'hovered') {
    histogramData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  }

  let tooltip: { index: number; value: number } | null = null;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'hovered') {
      console.log('Bar clicked');
    }
  }

  function showTooltip(index: number, value: number) {
    if (state === 'tooltipVisible') {
      tooltip = { index, value };
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="histogram" role="img" aria-label="Histogram">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <div class="bars">
      {#each histogramData as value, index}
        <div
          class="bar"
          style="height: {value}%"
          tabindex="0"
          on:click={handleClick}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(index, value)}
          on:mouseout={hideTooltip}
        ></div>
      {/each}
    </div>
    {#if tooltip}
      <div class="tooltip" style="left: {tooltip.index * 10}%;">
        Value: {tooltip.value}
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './Histogram.css';
</style>