<script lang="ts">
  export type WaterfallChartState = 'loading' | 'rendered' | 'empty' | 'tooltipVisible' | 'stacked';
  export let state: WaterfallChartState = 'rendered';

  let data = [];
  let tooltip: string | null = null;

  if (state === 'rendered' || state === 'tooltipVisible' || state === 'stacked') {
    data = [
      { label: 'Q1', value: 300 },
      { label: 'Q2', value: -150 },
      { label: 'Q3', value: 200 },
      { label: 'Q4', value: -100 }
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
      tooltip = `Value: ${data[index].value}`;
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="waterfall-chart" role="img" aria-label="Waterfall Chart">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <div class="bars">
      {#each data as { label, value }, index}
        <div
          class="bar"
          style="height: {Math.abs(value)}px; background-color: {value < 0 ? '#ff6384' : '#36a2eb'}"
          data-index={index}
          tabindex="0"
          on:click={() => showTooltip(event.currentTarget as HTMLElement)}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(event.currentTarget as HTMLElement)}
          on:mouseout={hideTooltip}
        >
          <span class="label">{label}</span>
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
  @import './WaterfallChart.css';
</style>