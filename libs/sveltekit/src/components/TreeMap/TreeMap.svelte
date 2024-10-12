<script lang="ts">
  export type TreeMapState = 'loading' | 'rendered' | 'empty' | 'tooltipVisible' | 'hovered';
  export let state: TreeMapState = 'rendered';

  let data = [];
  let tooltip: string | null = null;

  if (state === 'rendered' || state === 'tooltipVisible' || state === 'hovered') {
    data = [
      { name: 'Category A', value: 30 },
      { name: 'Category B', value: 70 },
      { name: 'Category C', value: 45 },
      { name: 'Category D', value: 85 },
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
      tooltip = `Name: ${data[index].name}, Value: ${data[index].value}`;
    }
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="treemap" role="img" aria-label="Tree Map">
  {#if state === 'loading'}
    <div class="loading-message">Loading...</div>
  {:else if state === 'empty'}
    <div class="empty-message">No data available</div>
  {:else}
    <div class="blocks">
      {#each data as { name, value }, index}
        <div
          class="block"
          style="flex-grow: {value}"
          data-index={index}
          tabindex="0"
          on:click={() => showTooltip(event.currentTarget as HTMLElement)}
          on:keydown={handleKeydown}
          on:mouseover={() => showTooltip(event.currentTarget as HTMLElement)}
          on:mouseout={hideTooltip}
        >
          <span class="name">{name}</span>
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
  @import './TreeMap.css';
</style>