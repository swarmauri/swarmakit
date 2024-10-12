<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum ActionableListState {
    Hover = 'hover',
    ActionTriggered = 'actionTriggered',
    Disabled = 'disabled',
    Loading = 'loading'
  }

  export let state: ActionableListState = ActionableListState.Hover;
  export let items: { title: string; action: string; disabled?: boolean }[] = [];

  const dispatch = createEventDispatcher();

  function handleAction(index: number) {
    if (items[index].disabled || state === ActionableListState.Disabled) return;
    dispatch('action', { index, action: items[index].action });
  }

  function handleKeyDown(event: KeyboardEvent, index: number) {
    if ((event.key === 'Enter' || event.key === ' ') && !items[index].disabled) {
      handleAction(index);
    }
  }
</script>

<div class="actionable-list">
  {#each items as { title, action, disabled }, index}
    <div
      class="actionable-item"
      role="button"
      tabindex={disabled ? -1 : 0}
      aria-disabled={disabled}
      on:click={() => handleAction(index)}
      on:keydown={(event) => handleKeyDown(event, index)}
      class:disabled={disabled}
    >
      <div class="item-title">{title}</div>
      {#if state === ActionableListState.Loading}
        <div class="loading-spinner"></div>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  @import './ActionableList.css';
</style>