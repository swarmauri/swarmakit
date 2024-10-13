<script lang="ts">
  export let items: Array<{ id: number; label: string; expanded: boolean; active?: boolean }> = [];
  
  function toggleExpand(itemId: number) {
    const event = new CustomEvent('toggleExpand', {
      detail: { itemId }
    });
    dispatchEvent(event);
  }
</script>

<div class="collapsible-menu-list">
  <ul>
    {#each items as item}
      <li class:item-active={item.active}>
        <div
          class="menu-item"
          on:click={() => toggleExpand(item.id)}
          aria-expanded={item.expanded}
          role="button"
          tabindex="0"
        >
          <span>{item.label}</span>
        </div>
        {#if item.expanded}
          <div class="submenu">
            <!-- Placeholder for submenu items -->
            <p>Submenu content for {item.label}</p>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  .collapsible-menu-list {
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

  .menu-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #f0f0f0;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .menu-item:hover {
    background-color: #e0e0e0;
  }

  .menu-item:focus {
    outline: none;
    background-color: #d0d0d0;
  }

  .item-active .menu-item {
    background-color: #c0c0c0;
  }
  
  .submenu {
    margin-left: 16px;
    padding: 8px;
    background-color: #f9f9f9;
    border-left: 2px solid #d0d0d0;
  }
</style>