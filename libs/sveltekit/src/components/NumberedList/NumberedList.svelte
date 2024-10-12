<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let items: { id: number; label: string }[] = [];
  export let selectedItem: number | null = null;
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function selectItem(itemId: number) {
    if (disabled) return;
    dispatch('select', { selectedItem: itemId });
  }

  function handleKeydown(event: KeyboardEvent, itemId: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectItem(itemId);
    }
  }
</script>

<ol class="numbered-list" aria-disabled={disabled}>
  {#each items as { id, label }}
    <li
      class="numbered-item"
      class:selected={selectedItem === id}
      class:disabled={disabled}
      role="option"
      aria-selected={selectedItem === id}
      tabindex={disabled ? -1 : 0}
      on:click={() => selectItem(id)}
      on:keydown={(event) => handleKeydown(event, id)}
    >
      {label}
    </li>
  {/each}
</ol>

<style lang="css">
  @import './NumberedList.css';
</style>