<script lang="ts">
  export interface TimelineItem {
    id: number;
    title: string;
    description: string;
    completed?: boolean;
  }

  export let items: TimelineItem[] = [];
  export let activeItemId: number;
  export let onItemSelect: (item: TimelineItem) => void;

  function selectItem(item: TimelineItem) {
    activeItemId = item.id;
    onItemSelect(item);
  }
</script>

<ul>
  {#each items as item (item.id)}
    <li
      role="listitem"
      class="timeline-item"
      aria-current={item.id === activeItemId ? 'step' : undefined}
      on:click={() => selectItem(item)}
      on:keydown={(event) => event.key === 'Enter' && selectItem(item)}
      tabindex="0"
    >
      <div class="content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      {#if item.completed}
        <span class="status completed">Completed</span>
      {:else}
        <span class="status">{item.id === activeItemId ? 'Active' : 'Inactive'}</span>
      {/if}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './TimelineList.css';
</style>