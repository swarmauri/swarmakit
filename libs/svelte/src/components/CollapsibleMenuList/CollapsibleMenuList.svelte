<script lang="ts">
  export let items: { id: number; label: string; expanded?: boolean; active?: boolean }[] = [];

  const toggleExpand = (item: { id: number; label: string; expanded?: boolean; active?: boolean }) => {
    item.expanded = !item.expanded;
  };

  const setActive = (item: { id: number; label: string; expanded?: boolean; active?: boolean }) => {
    items.forEach(i => i.active = false);
    item.active = true;
  };
</script>

<ul class="collapsible-menu">
  {#each items as item (item.id)}
    <li 
      class="menu-item {item.expanded ? 'expanded' : 'collapsed'} {item.active ? 'active' : ''}"
      on:click={() => setActive(item)}
      on:mouseenter={() => item.expanded = true}
      on:mouseleave={() => item.expanded = false}
    >
      <div class="menu-label" on:click={() => toggleExpand(item)}>
        {item.label}
      </div>
      {#if item.expanded}
        <ul class="submenu">
          <li>Sub-item 1</li>
          <li>Sub-item 2</li>
          <li>Sub-item 3</li>
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './CollapsibleMenuList.css';
</style>