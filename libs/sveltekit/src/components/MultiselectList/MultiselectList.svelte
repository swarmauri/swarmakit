<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  export let items: { id: number; label: string }[] = [];
  export let selectedItems: Set<number> = new Set();
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function toggleSelect(itemId: number) {
    if (disabled) return;

    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(itemId)) {
      newSelectedItems.delete(itemId);
    } else {
      newSelectedItems.add(itemId);
    }
    dispatch('select', { selectedItems: newSelectedItems });
  }

  function handleKeydown(event: KeyboardEvent, itemId: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSelect(itemId);
    }
  }
</script>

<ul class="multiselect-list" aria-disabled={disabled}>
  {#each items as { id, label }}
    <li
      class="multiselect-item"
      class:selected={selectedItems.has(id)}
      class:disabled={disabled}
      role="option"
      aria-selected={selectedItems.has(id)}
      tabindex={disabled ? -1 : 0}
      on:click={() => toggleSelect(id)}
      on:keydown={(event) => handleKeydown(event, id)}
    >
      {label}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './MultiselectList.css';
</style>