<script lang="ts">
  export type ChartState = 'loading' | 'rendered' | 'empty' | 'hovered' | 'clicked' | 'donut' | 'exploded';
  export let state: ChartState = 'rendered';

  let chartData: { category: string; value: number }[] = [];
  if (state === 'rendered' || state === 'donut' || state === 'exploded') {
    chartData = [
      { category: 'A', value: 30 },
      { category: 'B', value: 40 },
      { category: 'C', value: 30 },
    ];
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'clicked') {
      console.log('Slice clicked');
    }
  }
</script>

<div class="pie-chart" role="img" aria-label="Pie Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="-1 -1 2 2" style="transform: rotate(-0.25turn)">
      {#each chartData as { category, value }, index (index)}
        <path
          d={`...`}
          fill={`hsl(${index * 360 / chartData.length}, 70%, 50%)`}
          class="slice"
          tabindex="0"
          on:click={handleClick}
          on:keydown={handleKeydown}
        />
      {/each}
      {#if state === 'hovered'}
        <text x="0" y="-0.9" class="tooltip">Hovered</text>
      {/if}
      {#if state === 'donut'}
        <circle r="0.5" fill="#fff" />
      {/if}
    </svg>
  {/if}
</div>

<style lang="css">
  @import './PieChart.css';
</style>