<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum AccordionState {
    Open = 'open',
    Closed = 'closed',
    Hover = 'hover'
  }

  export let state: AccordionState = AccordionState.Closed;
  export let title: string = 'Accordion Title';
  export let content: string = 'Accordion Content';

  const dispatch = createEventDispatcher();

  function toggleAccordion() {
    if (state !== AccordionState.Open) {
      state = AccordionState.Open;
    } else {
      state = AccordionState.Closed;
    }
    dispatch('toggle', state);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAccordion();
    }
  }
</script>

<div
  class="accordion"
  role="button"
  tabindex="0"
  aria-expanded={state === AccordionState.Open}
  on:click={toggleAccordion}
  on:keydown={handleKeyDown}
>
  <div class="accordion-title">{title}</div>
  {#if state === AccordionState.Open}
    <div class="accordion-content">{content}</div>
  {/if}
</div>

<style lang="css">
  @import './Accordion.css';
</style>