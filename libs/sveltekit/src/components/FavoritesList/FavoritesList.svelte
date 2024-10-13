<script lang="ts">
  export let items: Array<{ title: string; starred: boolean }> = [];
  export let selectedItemIndex: number | null = null;

  function toggleStar(index: number) {
    items = items.map((item, i) => ({
      ...item,
      starred: i === index ? !item.starred : item.starred
    }));
  }

  function selectItem(index: number) {
    selectedItemIndex = index;
  }
</script>

<ul class="favorites-list">
  {#each items as item, index}
    <li
      class="list-item"
      class:selected={selectedItemIndex === index}
      on:click={() => selectItem(index)}
    >
      <span>{item.title}</span>
      <button
        class="star-button"
        on:click|stopPropagation={() => toggleStar(index)}
        aria-label={item.starred ? 'Unstar item' : 'Star item'}
        aria-pressed={item.starred}
      >
        {item.starred ? '★' : '☆'}
      </button>
    </li>
  {/each}
</ul>

<style lang="css">
  .favorites-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .list-item {
    border: 1px solid #ddd;
    margin-bottom: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    cursor: pointer;
  }

  .list-item:hover {
    background-color: #f1f1f1;
  }

  .list-item.selected {
    background-color: #e0e0e0;
  }

  .star-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>