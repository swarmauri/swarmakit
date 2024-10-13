<script lang="ts">
  export let isOpen: boolean = false;
  export let title: string = "Accordion Title";

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="accordion-container">
  <button class="accordion-header" on:click={toggle} aria-expanded={isOpen}>
    {title}
  </button>
  {#if isOpen}
    <div class="accordion-content" aria-hidden={!isOpen}>
      <slot />
    </div>
  {/if}
</div>

<style lang="css">
  .accordion-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }

  .accordion-header {
    width: 100%;
    padding: 10px;
    background-color: #f7f7f7;
    cursor: pointer;
    text-align: left;
    font-weight: bold;
  }

  .accordion-header:hover {
    background-color: #e0e0e0;
  }

  .accordion-content {
    padding: 10px;
    background-color: #fff;
  }
</style>