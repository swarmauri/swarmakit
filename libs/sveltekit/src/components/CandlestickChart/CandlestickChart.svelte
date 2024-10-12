<script lang="ts">
  export type CandlestickChartState = 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'hovered';
  export let state: CandlestickChartState = 'rendered';

  let data = [];
  let tooltip: string | null = null;
  let zoomLevel = 1;

  if (state === 'rendered' || state === 'tooltipVisible' || state === 'zoomed' || state === 'hovered') {
    data = [
      { date: '2023-01-01', open: 100, high: 120, low: 90, close: 110 },
      { date: '2023-01-02', open: 110, high: 130, low: 100, close: 115 },
      { date: '2023-01-03', open: 115, high: 125, low: 95, close: 105 },
    ];
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      showTooltip(event.currentTarget as HTMLElement);
    }
  }

  function showTooltip(target: HTMLElement) {
    if (state === 'tooltipVisible') {
      const index = target.dataset.index;
      tooltip = `Open: ${data[index].open}, Close: ${data[index].close}`;
    }
  }

  function hideTooltip() {
    tooltip = null;
  }

  function zoomIn() {
    if (state === 'zoomed') {
      zoomLevel = 2;
    }
  }

  function zoomOut() {
    if (state === 'zoomed') {
      zoomLevel = 1;
    }
  }
</script>

<div class="candlestick-chart" role="img" aria-label="Candlestick Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <div class="candles" style="transform: scale({zoomLevel})">
      {#each data as { date, open, high, low, close }, index}
        <div
          class="candle"
          style="height: {Math.abs(high - low)}px; top: {Math.min(open, close)}px; background-color: {close > open ? '#36a2eb' : '#ff6384'}"
          data-index={index}
          tabindex="0"
          on:click={() => showTooltip(event.currentTarget as HTMLElement)}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(event.currentTarget as HTMLElement)}
          on:mouseout={hideTooltip}
        >
          <span class="date">{date}</span>
        </div>
      {/each}
    </div>
    {#if tooltip}
      <div class="tooltip">
        {tooltip}
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './CandlestickChart.css';
</style>