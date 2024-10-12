<script lang="ts">
  export let isOpen: boolean = false;
  export let actions: Array<{ label: string; action: () => void }> = [];

  const toggleOpen = () => {
    isOpen = !isOpen;
  };

  const handleAction = (action: () => void) => {
    action();
    isOpen = false;
  };

  const handleKeyPress = (event: KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleAction(action);
    }
  };
</script>

<div class="action-sheet" role="dialog">
  <button on:click={toggleOpen} aria-haspopup="true" aria-expanded={isOpen}>
    Toggle Action Sheet
  </button>

  {#if isOpen}
    <div class="action-sheet-content">
      {#each actions as { label, action }}
        <div
          class="action-item"
          role="button"
          tabindex="0"
          on:click={() => handleAction(action)}
          on:keypress={(event) => handleKeyPress(event, action)}
        >
          {label}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="css">
  @import './ActionSheet.css';
</style>