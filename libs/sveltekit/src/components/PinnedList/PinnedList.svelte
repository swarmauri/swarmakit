<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export type ListItem = {
    id: number;
    text: string;
    pinned: boolean;
  };

  export let items: ListItem[] = [];

  const dispatch = createEventDispatcher();

  function togglePin(id: number) {
    dispatch('togglePin', { id });
  }

  function handleKeydown(event: KeyboardEvent, id: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePin(id);
    }
  }
</script>

<ul class="pinned-list">
  {#each items as item (item.id)}
    <li
      class="pinned-list-item"
      class:pinned={item.pinned}
      role="button"
      aria-pressed={item.pinned}
      tabindex="0"
      on:click={() => togglePin(item.id)}
      on:keydown={(event) => handleKeydown(event, item.id)}
    >
      {item.text}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './PinnedList.css';
</style>