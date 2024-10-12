<script lang="ts">
  export let suggestions: string[] = [];
  export let query: string = '';
  let filteredSuggestions: string[] = [];
  let showSuggestions: boolean = false;

  function onInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    query = target.value;
    filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
    showSuggestions = query.length > 0 && filteredSuggestions.length > 0;
  }

  function selectSuggestion(suggestion: string) {
    query = suggestion;
    showSuggestions = false;
  }
</script>

<div class="search-container">
  <input
    type="text"
    bind:value={query}
    on:input={onInput}
    placeholder="Search..."
    aria-autocomplete="list"
    aria-controls="suggestions-list"
  />
  {#if showSuggestions}
    <ul id="suggestions-list" role="listbox" class="suggestions">
      {#each filteredSuggestions as suggestion}
        <li
          role="option"
          on:click={() => selectSuggestion(suggestion)}
          on:keypress={(e) => e.key === 'Enter' && selectSuggestion(suggestion)}
          tabindex="0"
        >
          {suggestion}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="css">
  @import './SearchWithAutocomplete.css';
</style>