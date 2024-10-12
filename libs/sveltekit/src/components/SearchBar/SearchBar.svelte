<script lang="ts">
  export type SearchBarState = 'focused' | 'unfocused' | 'disabled';
  export let state: SearchBarState = 'unfocused';
  export let placeholder: string = 'Search...';

  function handleFocus() {
    if (state !== 'disabled') {
      state = 'focused';
    }
  }

  function handleBlur() {
    if (state !== 'disabled') {
      state = 'unfocused';
    }
  }
</script>

<input
  class={`search-bar search-bar-${state}`}
  type="text"
  placeholder={placeholder}
  on:focus={handleFocus}
  on:blur={handleBlur}
  disabled={state === 'disabled'}
  aria-label="Search"
  role="searchbox"
/>

<style lang="css">
  @import './SearchBar.css';
</style>