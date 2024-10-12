<script lang="ts">
  export type ChartState = 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'highlighted';
  export let state: ChartState = 'rendered';

  let chartData: { x: number; y: number }[] = [];
  if (state === 'rendered' || state === 'zoomed' || state === 'highlighted') {
    chartData = [
      { x: 1, y: 10 },
      { x: 2, y: 20 },
      { x: 3, y: 30 },
    ];
  }
</script>

<div class="line-chart" role="img" aria-label="Line Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 100 50">
      <path d="M0,50 {#each chartData as {x, y}}L{x * 10},{50 - y} {/each}" class="line-path" />
      {#if state === 'tooltipVisible'}
        <text x="30" y="20" class="tooltip">Tooltip</text>
      {/if}
      {#if state === 'highlighted'}
        <circle cx="20" cy="30" r="3" class="highlight-point"></circle>
      {/if}
    </svg>
  {/if}
</div>

<style lang="css">
  @import './LineChart.css';
</style>