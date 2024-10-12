<script lang="ts">
  export let isOpen: boolean = true;
  export let isExpanded: boolean = false;
  export let threadTitle: string = 'Thread Title';
  export let threadContent: string = 'This is the content of the thread.';

  function toggleOpen() {
    isOpen = !isOpen;
  }

  function toggleExpand() {
    isExpanded = !isExpanded;
  }
</script>

<div 
  class="thread-container" 
  role="region" 
  aria-expanded={isExpanded}
  on:click={toggleOpen} 
  on:keydown={(e) => e.key === 'Enter' ? toggleOpen() : null}
  tabindex="0"
>
  <div class="thread-header">
    <h3>{threadTitle}</h3>
    <button on:click|stopPropagation={toggleExpand}>
      {isExpanded ? 'Collapse' : 'Expand'}
    </button>
  </div>
  {#if isOpen}
    <div class="thread-content" aria-hidden={!isExpanded}>
      {threadContent}
    </div>
  {/if}
</div>

<style lang="css">
  @import './ThreadContainer.css';
</style>