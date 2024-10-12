<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum AccordionListState {
    Expanded = 'expanded',
    Collapsed = 'collapsed',
    Hover = 'hover'
  }

  export let state: AccordionListState = AccordionListState.Collapsed;
  export let items: { title: string; content: string }[] = [];

  const dispatch = createEventDispatcher();

  function toggleItem(index: number) {
    items = items.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : item.isOpen
    }));
    dispatch('toggle', items);
  }

  function handleKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleItem(index);
    }
  }
</script>

<div class="accordion-list">
  {#each items as { title, content, isOpen }, index}
    <div
      class="accordion-item"
      role="button"
      tabindex="0"
      aria-expanded={isOpen}
      on:click={() => toggleItem(index)}
      on:keydown={(event) => handleKeyDown(event, index)}
    >
      <div class="item-title">{title}</div>
      {#if isOpen}
        <div class="item-content">{content}</div>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  @import './AccordionList.css';
</style>