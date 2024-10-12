<script lang="ts">
  export type GaugeChartState = 'loading' | 'rendered' | 'empty' | 'tooltipVisible' | 'max' | 'min';
  export let state: GaugeChartState = 'rendered';

  let value = 0;
  if (state === 'rendered' || state === 'tooltipVisible' || state === 'max' || state === 'min') {
    value = state === 'max' ? 100 : state === 'min' ? 0 : 50;
  }

  let tooltip: string | null = null;

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      showTooltip();
    }
  }

  function showTooltip() {
    if (state === 'tooltipVisible') {
      tooltip = `Value: ${value}`;
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="gauge-chart" role="img" aria-label="Gauge Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg viewBox="0 0 100 50" class="chart">
      <path
        d="M 10 50 A 40 40 0 0 1 90 50"
        fill="transparent"
        stroke="#e6e6e6"
        stroke-width="8"
      />
      <path
        d="M 10 50 A 40 40 0 0 1 {10 + 80 * (value / 100)} 50"
        fill="transparent"
        stroke="#36a2eb"
        stroke-width="8"
        tabindex="0"
        on:click={showTooltip}
        on:keydown={handleKeydown}
        on:mouseover={showTooltip}
        on:mouseout={hideTooltip}
      />
      <circle cx="{10 + 80 * (value / 100)}" cy="50" r="4" fill="#36a2eb" />
    </svg>
    {#if tooltip}
      <div class="tooltip">
        {tooltip}
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './GaugeChart.css';
</style>