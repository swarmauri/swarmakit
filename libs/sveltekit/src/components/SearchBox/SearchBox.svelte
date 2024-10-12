<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let query: string = '';
  export let placeholder: string = 'Search...';
  
  const dispatch = createEventDispatcher();
  
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    dispatch('input', target.value);
  };
</script>

<div class="search-box">
  <input 
    type="text" 
    bind:value={query} 
    placeholder={placeholder}
    on:input={handleInput}
    aria-label="Search"
  />
</div>

<style lang="css">
  @import './SearchBox.css';
</style>