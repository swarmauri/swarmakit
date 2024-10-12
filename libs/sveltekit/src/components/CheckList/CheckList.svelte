<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum CheckListState {
    Checked = 'checked',
    Unchecked = 'unchecked',
    PartiallyChecked = 'partially-checked',
    Disabled = 'disabled'
  }

  export let state: CheckListState = CheckListState.Unchecked;
  export let items: { label: string; checked?: boolean; disabled?: boolean }[] = [];

  const dispatch = createEventDispatcher();

  function toggleCheck(index: number) {
    if (items[index].disabled || state === CheckListState.Disabled) return;
    items[index].checked = !items[index].checked;
    dispatch('toggle', { index, checked: items[index].checked });
  }

  function handleKeyDown(event: KeyboardEvent, index: number) {
    if ((event.key === 'Enter' || event.key === ' ') && !items[index].disabled) {
      toggleCheck(index);
    }
  }
</script>

<div class="checklist">
  {#each items as { label, checked, disabled }, index}
    <div
      class="checklist-item"
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabindex={disabled ? -1 : 0}
      on:click={() => toggleCheck(index)}
      on:keydown={(event) => handleKeyDown(event, index)}
      class:checked={checked}
      class:disabled={disabled}
    >
      <input type="checkbox" bind:checked disabled={disabled} />
      <label>{label}</label>
    </div>
  {/each}
</div>

<style lang="css">
  @import './CheckList.css';
</style>