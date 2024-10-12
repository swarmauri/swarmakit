<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum ListState {
    ItemExpanded = 'itemExpanded',
    ItemCollapsed = 'itemCollapsed',
    Hover = 'hover',
    Selected = 'selected'
  }

  export let state: ListState = ListState.ItemCollapsed;
  export let items: { title: string; content: string; }[] = [];

  const dispatch = createEventDispatcher();
  let expandedIndex: number | null = null;
  let selectedIndex: number | null = null;

  function toggleItem(index: number) {
    expandedIndex = expandedIndex === index ? null : index;
    dispatch('toggle', { index, expanded: expandedIndex === index });
  }

  function selectItem(index: number) {
    selectedIndex = index;
    dispatch('select', { index });
  }
</script>

<ul class="expandable-list">
  {#each items as { title, content }, index}
    <li
      class="list-item"
      class:selected={state === ListState.Selected && selectedIndex === index}
      on:click={() => toggleItem(index)}
      on:keydown={(e) => e.key === 'Enter' && toggleItem(index)}
      tabindex="0"
      role="button"
    >
      <div
        class="item-header"
        on:mouseenter={() => state = ListState.Hover}
        on:mouseleave={() => state = ListState.ItemCollapsed}
      >
        {title}
      </div>
      {#if expandedIndex === index && state === ListState.ItemExpanded}
        <div class="item-content">{content}</div>
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './ExpandableList.css';
</style>