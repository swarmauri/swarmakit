<script lang="ts">
  import { writable } from 'svelte/store';

  export interface Group {
    title: string;
    items: Array<{ id: number; name: string }>;
  }

  export let groups: Array<Group> = [];
  let expandedGroups = writable<Set<string>>(new Set());

  function toggleGroup(title: string) {
    expandedGroups.update((current) => {
      const newSet = new Set(current);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  }

  function isExpanded(title: string) {
    return $expandedGroups.has(title);
  }
</script>

<div class="grouped-list">
  {#each groups as group}
    <div class="group">
      <div
        class="group-title"
        on:click={() => toggleGroup(group.title)}
        aria-expanded={isExpanded(group.title)}
      >
        {group.title}
      </div>
      {#if isExpanded(group.title)}
        <ul>
          {#each group.items as item}
            <li class="item">{item.name}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  .grouped-list {
    margin: 0;
    padding: 0;
  }

  .group {
    margin-bottom: 10px;
  }

  .group-title {
    cursor: pointer;
    font-weight: bold;
    padding: 8px;
    background-color: #f5f5f5;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .item {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }

  .item:hover {
    background-color: #e0e0e0;
  }

  .item.selected {
    background-color: #c0c0ff;
  }
</style>