<script lang="ts">
  export let isVisible: boolean = false;
  export let content: string = 'This is a popover content.';

  const togglePopover = () => {
    isVisible = !isVisible;
  };
</script>

<div class="popover-container" role="dialog" aria-hidden={!isVisible}>
  <button on:click={togglePopover} on:keydown={(e) => e.key === 'Enter' && togglePopover()} aria-expanded={isVisible}>
    Toggle Popover
  </button>
  {#if isVisible}
    <div class="popover">
      <p>{content}</p>
    </div>
  {/if}
</div>

<style lang="css">
  @import './Popover.css';
</style>