<script lang="ts">
  export let isVisible: boolean = false;
  export let content: string = 'This is a tooltip.';
  export let type: 'default' | 'error' | 'information' = 'default';

  const toggleTooltip = () => {
    isVisible = !isVisible;
  };
</script>

<div class="tooltip-container" role="tooltip" aria-hidden={!isVisible}>
  <button on:click={toggleTooltip} on:keydown={(e) => e.key === 'Enter' && toggleTooltip()} aria-expanded={isVisible}>
    Toggle Tooltip
  </button>
  {#if isVisible}
    <div class={`tooltip tooltip--${type}`}>
      <p>{content}</p>
    </div>
  {/if}
</div>

<style lang="css">
  @import './Tooltip.css';
</style>