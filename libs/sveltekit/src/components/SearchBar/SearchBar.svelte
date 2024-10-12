<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum SearchBarState {
    Focused = 'focused',
    Unfocused = 'unfocused',
    Disabled = 'disabled'
  }

  export let state: SearchBarState = SearchBarState.Unfocused;
  export let placeholder: string = 'Search...';
  export let value: string = '';

  const dispatch = createEventDispatcher();

  function handleInput(event: Event) {
    if (state !== SearchBarState.Disabled) {
      dispatch('input', (event.target as HTMLInputElement).value);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && state !== SearchBarState.Disabled) {
      dispatch('search', value);
    }
  }
</script>

<input
  type="text"
  class="search-bar"
  placeholder={placeholder}
  bind:value
  class={state}
  on:input={handleInput}
  on:keydown={handleKeydown}
  {disabled}
  aria-disabled={state === SearchBarState.Disabled}
/>

<style lang="css">
  @import './SearchBar.css';
</style>