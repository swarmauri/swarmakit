<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum CardbasedListState {
    Hover = 'hover',
    Selected = 'selected',
    Disabled = 'disabled'
  }

  export let state: CardbasedListState = CardbasedListState.Hover;
  export let cards: { title: string; content: string; disabled?: boolean }[] = [];

  const dispatch = createEventDispatcher();

  function handleSelect(index: number) {
    if (cards[index].disabled || state === CardbasedListState.Disabled) return;
    dispatch('select', { index });
  }

  function handleKeyDown(event: KeyboardEvent, index: number) {
    if ((event.key === 'Enter' || event.key === ' ') && !cards[index].disabled) {
      handleSelect(index);
    }
  }
</script>

<div class="cardbased-list">
  {#each cards as { title, content, disabled }, index}
    <div
      class="cardbased-item"
      role="button"
      tabindex={disabled ? -1 : 0}
      aria-disabled={disabled}
      on:click={() => handleSelect(index)}
      on:keydown={(event) => handleKeyDown(event, index)}
      class:disabled={disabled}
    >
      <h3 class="card-title">{title}</h3>
      <p class="card-content">{content}</p>
    </div>
  {/each}
</div>

<style lang="css">
  @import './CardbasedList.css';
</style>