<script lang="ts">
  export type ChartState = 'loading' | 'rendered' | 'empty' | 'zoomed' | 'tooltipVisible' | 'highlighted';
  export let state: ChartState = 'rendered';

  let chartData: { x: number; y: number; radius: number; label: string }[] = [];
  if (state === 'rendered' || state === 'zoomed' || state === 'tooltipVisible' || state === 'highlighted') {
    chartData = Array.from({ length: 10 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      radius: Math.random() * 10 + 5,
      label: `Bubble ${i + 1}`,
    }));
  }

  let tooltip: { x: number; y: number; content: string } | null = null;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    if (state === 'highlighted') {
      console.log('Bubble clicked');
    }
  }

  function showTooltip(x: number, y: number, content: string) {
    if (state === 'tooltipVisible') {
      tooltip = { x, y, content };
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="bubble-chart" role="img" aria-label="Bubble Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 100 100">
      {#each chartData as { x, y, radius, label }}
        <circle
          cx={x}
          cy={y}
          r={radius}
          fill="rgba(70, 130, 180, 0.6)"
          stroke="steelblue"
          tabindex="0"
          on:click={handleClick}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(x, y, label)}
          on:mouseout={hideTooltip}
        />
      {/each}
    </svg>
    {#if tooltip}
      <div class="tooltip" style="left: {tooltip.x}%; top: {tooltip.y}%;">
        {tooltip.content}
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './BubbleChart.css';
</style>