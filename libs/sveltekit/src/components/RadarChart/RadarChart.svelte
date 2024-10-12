<script lang="ts">
  export type ChartState = 'loading' | 'rendered' | 'empty' | 'hovered' | 'clicked';
  export let state: ChartState = 'rendered';

  let chartData: { label: string; value: number }[] = [];
  const labels = ['A', 'B', 'C', 'D', 'E'];
  if (state === 'rendered' || state === 'hovered' || state === 'clicked') {
    chartData = labels.map((label) => ({
      label,
      value: Math.random() * 10,
    }));
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'clicked') {
      console.log('Radar segment clicked');
    }
  }
</script>

<div class="radar-chart" role="img" aria-label="Radar Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="-10 -10 20 20">
      <polygon
        points={chartData.map(({ label, value }, index) => {
          const angle = (Math.PI / 180) * (360 / labels.length) * index;
          const x = value * Math.cos(angle);
          const y = value * Math.sin(angle);
          return `${x},${y}`;
        }).join(' ')}
        fill="rgba(173, 216, 230, 0.5)"
        stroke="steelblue"
        tabindex="0"
        on:click={handleClick}
        on:keydown={handleKeydown}
      />
    </svg>
  {/if}
</div>

<style lang="css">
  @import './RadarChart.css';
</style>