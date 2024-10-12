<script lang="ts">
  export type ListState = 'default' | 'actionTriggered' | 'dismissed';
  export let state: ListState = 'default';
  export let listItems: { label: string; action: () => void }[] = [];
  let isVisible: boolean = state !== 'dismissed';

  function triggerAction(index: number) {
    listItems[index].action();
  }

  function handleKey(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      triggerAction(index);
    }
  }
</script>

{#if isVisible}
  <ul class={`contextual-list list-${state}`}>
    {#each listItems as { label, action }, index}
      <li
        role="button"
        tabindex="0"
        on:click={() => triggerAction(index)}
        on:keydown={(event) => handleKey(event, index)}
      >
        {label}
      </li>
    {/each}
  </ul>
{/if}

<style lang="css">
  @import './ContextualList.css';
</style>