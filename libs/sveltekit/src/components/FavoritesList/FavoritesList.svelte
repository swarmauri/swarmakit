<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum ListState {
    Starred = 'starred',
    Unstarred = 'unstarred',
    Hover = 'hover',
    Selected = 'selected'
  }

  export let state: ListState = ListState.Unstarred;
  export let items: { title: string; starred: boolean; }[] = [];

  const dispatch = createEventDispatcher();
  let selectedIndex: number | null = null;

  function toggleStar(index: number) {
    items[index].starred = !items[index].starred;
    dispatch('toggleStar', { index, starred: items[index].starred });
  }

  function selectItem(index: number) {
    selectedIndex = index;
    dispatch('select', { index });
  }
</script>

<ul class="favorites-list">
  {#each items as { title, starred }, index}
    <li
      class="list-item"
      class:selected={state === ListState.Selected && selectedIndex === index}
      on:click={() => toggleStar(index)}
      on:keydown={(e) => e.key === 'Enter' && toggleStar(index)}
      tabindex="0"
      role="button"
    >
      <div
        class="item-header"
        on:mouseenter={() => state = ListState.Hover}
        on:mouseleave={() => state = ListState.Unstarred}
      >
        {title}
        <span class="star" class:starred={starred}>★</span>
      </div>
    </li>
  {/each}
</ul>

<style lang="css">
  @import './FavoritesList.css';
</style>