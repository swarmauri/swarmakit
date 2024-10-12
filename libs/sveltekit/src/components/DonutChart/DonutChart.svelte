<script lang="ts">
  export type DonutChartState = 'loading' | 'rendered' | 'empty' | 'hovered' | 'clicked' | 'tooltipVisible' | 'exploded';
  export let state: DonutChartState = 'rendered';

  interface Slice {
    label: string;
    value: number;
    color: string;
    exploded: boolean;
  }

  let slices: Slice[] = [];
  if (state === 'rendered' || state === 'hovered' || state === 'clicked' || state === 'tooltipVisible' || state === 'exploded') {
    slices = [
      { label: 'A', value: 30, color: '#ff6384', exploded: state === 'exploded' },
      { label: 'B', value: 50, color: '#36a2eb', exploded: state === 'exploded' },
      { label: 'C', value: 20, color: '#cc65fe', exploded: state === 'exploded' },
    ];
  }

  let tooltip: { label: string; value: number } | null = null;

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

  function showTooltip(label: string, value: number) {
    if (state === 'tooltipVisible') {
      tooltip = { label, value };
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="donut-chart" role="img" aria-label="Donut Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 32 32" class="chart">
      {#each slices as { label, value, color, exploded }, index (label)}
        <circle
          class="slice"
          r="16"
          cx="16"
          cy="16"
          fill="transparent"
          stroke={color}
          stroke-dasharray="{value} 100"
          stroke-width="32"
          transform="rotate(-90) translate(-32)"
          tabindex="0"
          on:click={() => handleClick()}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(label, value)}
          on:mouseout={hideTooltip}
          style="stroke-width: {exploded ? 36 : 32};"
        />
      {/each}
    </svg>
    {#if tooltip}
      <div class="tooltip">
        {tooltip.label}: {tooltip.value}%
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './DonutChart.css';
</style>