<script lang="ts">
  import { writable } from 'svelte/store';

  export type Group = { id: number; title: string; items: ListItem[]; };
  export type ListItem = { id: number; title: string; };

  export let groups: Group[] = [];
  const expandedGroups = writable(new Set<number>());
  const selectedItem = writable<ListItem | null>(null);

  function toggleGroup(groupId: number) {
    expandedGroups.update(expanded => {
      const newExpanded = new Set(expanded);
      if (newExpanded.has(groupId)) {
        newExpanded.delete(groupId);
      } else {
        newExpanded.add(groupId);
      }
      return newExpanded;
    });
  }

  function selectItem(item: ListItem) {
    selectedItem.set(item);
  }
</script>

<div class="grouped-list">
  {#each groups as { id: groupId, title: groupTitle, items }}
    <div class="group">
      <div 
        class="group-title" 
        role="button" 
        tabindex="0" 
        on:click={() => toggleGroup(groupId)} 
        on:keydown={(e) => e.key === 'Enter' && toggleGroup(groupId)}
        aria-expanded={$expandedGroups.has(groupId)}>
        {groupTitle}
      </div>
      {#if $expandedGroups.has(groupId)}
        <ul>
          {#each items as { id, title }}
            <li 
              class="list-item" 
              bind:this={selectedItem}
              on:click={() => selectItem({ id, title })} 
              aria-selected={$selectedItem?.id === id}
              on:mouseenter={() => selectedItem.set({ id, title })}
              on:mouseleave={() => selectedItem.set(null)}>
              {title}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  @import './GroupedList.css';
</style>