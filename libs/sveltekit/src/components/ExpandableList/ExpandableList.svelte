<script lang="ts">
  export type ListState = 'itemExpanded' | 'itemCollapsed' | 'hover' | 'selected';
  export let items: { id: number; title: string; content: string }[] = [];
  export let state: ListState = 'itemCollapsed';

  let expandedItem: number | null = null;
  let selectedItem: number | null = null;

  function toggleExpand(itemId: number) {
    expandedItem = expandedItem === itemId ? null : itemId;
  }

  function selectItem(itemId: number) {
    selectedItem = itemId;
  }
</script>

<ul class="expandable-list">
  {#each items as { id, title, content }}
    <li
      class={`list-item ${expandedItem === id ? 'expanded' : ''} ${selectedItem === id ? 'selected' : ''}`}
      on:click={() => toggleExpand(id)}
      on:keydown={(e) => e.key === 'Enter' && toggleExpand(id)}
      role="button"
      tabindex="0"
    >
      <div
        class="list-title"
        on:mouseenter={() => selectItem(id)}
        on:mouseleave={() => selectItem(null)}
      >
        {title}
      </div>
      {#if expandedItem === id}
        <div class="list-content">
          {content}
        </div>
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './ExpandableList.css';
</style>