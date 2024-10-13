<script lang="ts">
  export let items: Array<{ id: number; text: string }> = [];
  export let isDisabled: boolean = false;
  export let isLoading: boolean = false;

  function triggerAction(itemId: number) {
    if (!isDisabled && !isLoading) {
      const event = new CustomEvent('action', {
        detail: { itemId }
      });
      dispatchEvent(event);
    }
  }
</script>

<div class="actionable-list-container" aria-busy={isLoading}>
  {#if isLoading}
    <div class="loading">Loading...</div>
  {/if}
  <ul>
    {#each items as item}
      <li>
        <button
          on:click={() => triggerAction(item.id)}
          disabled={isDisabled || isLoading}
          aria-disabled={isDisabled || isLoading}
        >
          {item.text}
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  .actionable-list-container {
    padding: 10px;
  }

  .loading {
    margin-bottom: 10px;
    font-style: italic;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    text-align: left;
  }

  button:hover {
    background-color: #e0e0e0;
  }

  button:disabled {
    cursor: not-allowed;
    background-color: #f0f0f0;
  }
</style>