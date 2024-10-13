<script lang="ts">
  export let items: Array<{ id: number; label: string; actionTriggered: boolean }> = [];
  
  function triggerAction(itemId: number) {
    const event = new CustomEvent('actionTriggered', {
      detail: { itemId }
    });
    dispatchEvent(event);
  }

  function dismissItem(itemId: number) {
    const event = new CustomEvent('itemDismissed', {
      detail: { itemId }
    });
    dispatchEvent(event);
  }
</script>

<div class="contextual-list">
  <ul>
    {#each items as item}
      <li class:item-action-triggered={item.actionTriggered}>
        <span>{item.label}</span>
        <button on:click={() => triggerAction(item.id)} aria-label="Trigger action" tabindex="0">
          Action
        </button>
        <button on:click={() => dismissItem(item.id)} aria-label="Dismiss item" tabindex="0">
          Dismiss
        </button>
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  .contextual-list {
    padding: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 8px;
    background-color: #f0f0f0;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  li:hover {
    background-color: #e0e0e0;
  }

  button {
    margin-left: 10px;
    padding: 4px 8px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  .item-action-triggered {
    background-color: #c0ffc0;
  }
</style>