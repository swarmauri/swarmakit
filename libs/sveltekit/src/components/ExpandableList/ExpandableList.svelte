<script lang="ts">
  export let items: Array<{ title: string; content: string; expanded: boolean }> = [];
  export let selectedItemIndex: number | null = null;

  function toggleItem(index: number) {
    items = items.map((item, i) => ({
      ...item,
      expanded: i === index ? !item.expanded : item.expanded
    }));
  }

  function selectItem(index: number) {
    selectedItemIndex = index;
  }
</script>

<ul class="expandable-list">
  {#each items as item, index}
    <li
      class="list-item"
      class:selected={selectedItemIndex === index}
      on:click={() => selectItem(index)}
    >
      <div
        class="list-item-title"
        on:click|stopPropagation={() => toggleItem(index)}
        tabindex="0"
        aria-expanded={item.expanded}
        aria-controls={`content-${index}`}
      >
        {item.title}
      </div>
      {#if item.expanded}
        <div id={`content-${index}`} class="list-item-content">
          {item.content}
        </div>
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  .expandable-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .list-item {
    border: 1px solid #ddd;
    margin-bottom: 5px;
    cursor: pointer;
    padding: 10px;
    background-color: #f9f9f9;
  }

  .list-item:hover {
    background-color: #f1f1f1;
  }

  .list-item.selected {
    background-color: #e0e0e0;
  }

  .list-item-title {
    font-weight: bold;
  }

  .list-item-content {
    margin-top: 5px;
  }
</style>