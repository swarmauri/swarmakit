<script lang="ts">
  export let expanded: boolean = false;

  function toggleExpand() {
    expanded = !expanded;
  }
</script>

<div class="fab" role="button" aria-expanded={expanded} tabindex="0" on:click={toggleExpand} on:keypress={(e) => e.key === 'Enter' && toggleExpand()}>
  <span class="icon">{expanded ? '-' : '+'}</span>
  {#if expanded}
    <div class="fab-content">
      <slot></slot>
    </div>
  {/if}
</div>

<style lang="css">
  @import './FloatingActionButton.css';
</style>