<script lang="ts">
  import { writable } from 'svelte/store';

  export enum ListState {
    GroupExpanded = 'groupExpanded',
    GroupCollapsed = 'groupCollapsed',
    ItemHover = 'itemHover',
    ItemSelected = 'itemSelected'
  }

  export let state: ListState = ListState.GroupCollapsed;
  export let groups: { title: string; items: string[] }[] = [];

  let expandedGroups = writable<string[]>([]);

  function toggleGroup(title: string) {
    expandedGroups.update(groups => {
      if (groups.includes(title)) {
        return groups.filter(group => group !== title);
      }
      return [...groups, title];
    });
  }
</script>

<div class="grouped-list">
  {#each groups as group}
    <div class="group">
      <div
        class="group-title"
        role="button"
        on:click={() => toggleGroup(group.title)}
        on:keydown={(e) => e.key === 'Enter' && toggleGroup(group.title)}
        tabindex="0"
      >
        {group.title}
      </div>
      {#if $expandedGroups.includes(group.title)}
        <ul>
          {#each group.items as item}
            <li class={state === ListState.ItemSelected ? 'selected' : ''}>{item}</li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</div>

<style lang="css">
  @import './GroupedList.css';
</style>