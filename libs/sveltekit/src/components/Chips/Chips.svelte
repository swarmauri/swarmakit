<script lang="ts">
  export let label: string;
  export let isSelectable: boolean = false;
  export let isSelected: boolean = false;
  export let isRemovable: boolean = false;

  function toggleSelect() {
    if (isSelectable) {
      isSelected = !isSelected;
    }
  }

  function removeChip() {
    if (isRemovable) {
      const event = new CustomEvent('remove', {
        detail: { label }
      });
      dispatchEvent(event);
    }
  }
</script>

<div
  class="chip"
  class:selected={isSelected}
  on:click={toggleSelect}
  role="button"
  tabindex="0"
  on:keypress={(e) => e.key === 'Enter' && toggleSelect()}
>
  {label}
  {#if isRemovable}
    <button class="remove-button" on:click|stopPropagation={removeChip} aria-label="Remove chip">
      &times;
    </button>
  {/if}
</div>

<style lang="css">
  @import './Chips.css';
</style>