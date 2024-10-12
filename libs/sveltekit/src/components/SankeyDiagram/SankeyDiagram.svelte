<script lang="ts">
  export type SankeyDiagramState = 'loading' | 'rendered' | 'empty' | 'tooltipVisible' | 'hovered';
  export let state: SankeyDiagramState = 'rendered';

  let nodes = [];
  let links = [];
  let tooltip: string | null = null;

  if (state === 'rendered' || state === 'tooltipVisible' || state === 'hovered') {
    nodes = [
      { name: 'Source A' },
      { name: 'Source B' },
      { name: 'Target A' },
      { name: 'Target B' },
    ];

    links = [
      { source: 0, target: 2, value: 10 },
      { source: 1, target: 2, value: 15 },
      { source: 0, target: 3, value: 5 },
      { source: 1, target: 3, value: 20 },
    ];
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      showTooltip(event.currentTarget as HTMLElement);
    }
  }

  function showTooltip(target: HTMLElement) {
    if (state === 'tooltipVisible') {
      const linkIndex = target.dataset.index;
      const link = links[linkIndex];
      tooltip = `Source: ${nodes[link.source].name}, Target: ${nodes[link.target].name}, Value: ${link.value}`;
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="sankey-diagram" role="img" aria-label="Sankey Diagram">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <svg class="diagram" width="100%" height="500">
      {#each links as { source, target, value }, index}
        <line
          class="link"
          x1={source * 100 + 50}
          y1={index * 50 + 50}
          x2={target * 100 + 150}
          y2={index * 50 + 50}
          stroke-width={value}
          tabindex="0"
          on:click={() => showTooltip(event.currentTarget as HTMLElement)}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(event.currentTarget as HTMLElement)}
          on:mouseout={hideTooltip}
          data-index={index}
        />
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
  @import './SankeyDiagram.css';
</style>