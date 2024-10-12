<script lang="ts">
  export type BoxPlotState = 'loading' | 'rendered' | 'empty' | 'hovered' | 'clicked' | 'tooltipVisible';
  export let state: BoxPlotState = 'rendered';

  let data = [];
  let tooltip: string | null = null;

  if (state === 'rendered' || state === 'hovered' || state === 'clicked' || state === 'tooltipVisible') {
    data = [
      { label: 'Group A', min: 10, q1: 20, median: 30, q3: 40, max: 50 },
      { label: 'Group B', min: 15, q1: 25, median: 35, q3: 45, max: 55 },
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
      const box = data[index];
      tooltip = `Label: ${box.label}, Min: ${box.min}, Max: ${box.max}, Median: ${box.median}`;
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="box-plot" role="img" aria-label="Box Plot">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg class="plot" width="100%" height="300">
      {#each data as { label, min, q1, median, q3, max }, index}
        <g>
          <line
            class="box-line"
            x1={index * 150 + 50}
            y1={max}
            x2={index * 150 + 50}
            y2={min}
            tabindex="0"
            on:click={() => showTooltip(event.currentTarget as HTMLElement)}
            on:keydown={handleKeydown}
            on:mouseover={() => showTooltip(event.currentTarget as HTMLElement)}
            on:mouseout={hideTooltip}
            data-index={index}
          />
          <rect
            class="box-rect"
            x={index * 150 + 40}
            y={q3}
            width="20"
            height={q1 - q3}
            tabindex="0"
            on:click={() => showTooltip(event.currentTarget as HTMLElement)}
            on:keydown={handleKeydown}
            on:mouseover={() => showTooltip(event.currentTarget as HTMLElement)}
            on:mouseout={hideTooltip}
            data-index={index}
          />
          <line
            class="median-line"
            x1={index * 150 + 40}
            y1={median}
            x2={index * 150 + 60}
            y2={median}
          />
        </g>
      {/each}
    </svg>
    {#if tooltip}
      <div class="tooltip">
        {tooltip}
      </div>
    {/if}
  {/if}
</div>

<style lang="css">
  @import './BoxPlot.css';
</style>