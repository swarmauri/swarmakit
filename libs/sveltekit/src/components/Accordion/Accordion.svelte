<script lang="ts">
  export type AccordionState = 'open' | 'closed' | 'hover';
  export let state: AccordionState = 'closed';
  export let title: string = 'Accordion Title';
  export let content: string = 'Accordion Content';
  let isOpen: boolean = state === 'open';

  function toggleAccordion() {
    isOpen = !isOpen;
  }

  function handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleAccordion();
    }
  }
</script>

<div
  class={`accordion accordion-${state}`}
  role="button"
  tabindex="0"
  on:click={toggleAccordion}
  on:keydown={handleKey}
  aria-expanded={isOpen}
>
  <div class="accordion-title">{title}</div>
  {#if isOpen}
    <div class="accordion-content">{content}</div>
  {/if}
</div>

<style lang="css">
  @import './Accordion.css';
</style>