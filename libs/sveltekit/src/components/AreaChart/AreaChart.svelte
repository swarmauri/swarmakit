<script lang="ts">
  export type ChartState = 'loading' | 'rendered' | 'empty' | 'stacked' | 'hovered' | 'clicked' | 'tooltipVisible';
  export let state: ChartState = 'rendered';

  let chartData: { x: number; y: number; y2?: number }[] = [];
  if (state === 'rendered' || state === 'stacked' || state === 'hovered' || state === 'clicked') {
    chartData = Array.from({ length: 100 }, (_, i) => ({
      x: i,
      y: Math.random() * 10,
      y2: state === 'stacked' ? Math.random() * 5 : undefined,
    }));
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'clicked') {
      console.log('Area clicked');
    }
  }
</script>

<div class="area-chart" role="img" aria-label="Area Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 100 10">
      <path
        d={`M0,10 ${chartData.map(({ x, y }) => `L${x},${10 - y}`).join(' ')} L100,10 Z`}
        fill="lightblue"
        class="area"
        tabindex="0"
        on:click={handleClick}
        on:keydown={handleKeydown}
      />
      {#if state === 'stacked'}
        <path
          d={`M0,10 ${chartData.map(({ x, y2 }) => `L${x},${10 - (y2 ?? 0)}`).join(' ')} L100,10 Z`}
          fill="lightgreen"
          class="area"
        />
      {/if}
      {#if state === 'tooltipVisible'}
        <text x="50" y="1" class="tooltip">Tooltip Visible</text>
      {/if}
    </svg>
  {/if}
</div>

<style lang="css">
  @import './AreaChart.css';
</style>