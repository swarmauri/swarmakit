<script lang="ts">
  export type ChartState = 'loading' | 'rendered' | 'empty' | 'stacked' | 'grouped' | 'hovered' | 'clicked';
  export let state: ChartState = 'rendered';

  let chartData: { category: string; value: number }[] = [];
  if (state === 'rendered' || state === 'stacked' || state === 'grouped') {
    chartData = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
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
      console.log('Bar clicked');
    }
  }
</script>

<div class="bar-chart" role="img" aria-label="Bar Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 100 50">
      {#each chartData as { category, value }, index}
        <rect
          x={index * 30}
          y={50 - value}
          width="20"
          height={value}
          class="bar-rect"
          tabindex="0"
          on:click={handleClick}
          on:keydown={handleKeydown}
        />
      {/each}
      {#if state === 'hovered'}
        <text x="30" y="5" class="tooltip">Hovered</text>
      {/if}
    </svg>
  {/if}
</div>

<style lang="css">
  @import './BarChart.css';
</style>