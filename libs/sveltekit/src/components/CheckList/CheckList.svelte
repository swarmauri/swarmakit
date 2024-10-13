<script lang="ts">
  export let items: Array<{ id: number; label: string; checked: boolean; partiallyChecked?: boolean }> = [];
  export let isDisabled: boolean = false;

  function toggleCheck(itemId: number) {
    if (!isDisabled) {
      const event = new CustomEvent('toggle', {
        detail: { itemId }
      });
      dispatchEvent(event);
    }
  }
</script>

<div class="checklist-container">
  <ul>
    {#each items as item}
      <li>
        <div
          class="checkbox"
          on:click={() => toggleCheck(item.id)}
          aria-checked={item.checked}
          aria-disabled={isDisabled}
          role="checkbox"
        >
          <input
            type="checkbox"
            bind:checked={item.checked}
            disabled={isDisabled}
            aria-checked={item.partiallyChecked ? 'mixed' : item.checked}
          />
          <label>{item.label}</label>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  .checklist-container {
    padding: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  .checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .checkbox[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  input {
    margin-right: 8px;
  }
</style>