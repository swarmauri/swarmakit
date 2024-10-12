<script lang="ts">
  export type ListState = 'starred' | 'unstarred' | 'hover' | 'selected';
  export let items: { id: number; title: string; isStarred: boolean }[] = [];
  export let state: ListState = 'unstarred';

  let selectedItem: number | null = null;

  function toggleStar(itemId: number) {
    const item = items.find(item => item.id === itemId);
    if (item) {
      item.isStarred = !item.isStarred;
    }
  }

  function selectItem(itemId: number) {
    selectedItem = itemId;
  }
</script>

<ul class="favorites-list">
  {#each items as { id, title, isStarred }}
    <li
      class={`list-item ${isStarred ? 'starred' : 'unstarred'} ${selectedItem === id ? 'selected' : ''}`}
      on:click={() => toggleStar(id)}
      on:keydown={(e) => e.key === 'Enter' && toggleStar(id)}
      role="button"
      tabindex="0"
    >
      <div
        class="list-title"
        on:mouseenter={() => selectItem(id)}
        on:mouseleave={() => selectItem(null)}
      >
        {title}
        <span class="star-icon">{isStarred ? '⭐' : '☆'}</span>
      </div>
    </li>
  {/each}
</ul>

<style lang="css">
  @import './FavoritesList.css';
</style>