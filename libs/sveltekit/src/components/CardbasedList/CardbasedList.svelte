<script lang="ts">
  export let items: Array<{ id: number; title: string; description: string }> = [];
  export let selectedId: number | null = null;
  export let isDisabled: boolean = false;

  function selectItem(itemId: number) {
    if (!isDisabled) {
      const event = new CustomEvent('select', {
        detail: { itemId }
      });
      dispatchEvent(event);
    }
  }
</script>

<div class="cardbased-list-container">
  <ul>
    {#each items as item}
      <li>
        <div
          class="card"
          on:click={() => selectItem(item.id)}
          aria-selected={selectedId === item.id}
          aria-disabled={isDisabled}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  .cardbased-list-container {
    padding: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    width: 100%;
  }

  @media (min-width: 600px) {
    li {
      width: 48%;
    }
  }

  @media (min-width: 900px) {
    li {
      width: 31%;
    }
  }

  .card {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    transition: background-color 0.3s;
  }

  .card:hover {
    background-color: #e0e0e0;
  }

  .card[aria-selected='true'] {
    border-color: #007bff;
    background-color: #d9eaff;
  }

  .card[aria-disabled='true'] {
    cursor: not-allowed;
    background-color: #f8f8f8;
    opacity: 0.6;
  }
</style>