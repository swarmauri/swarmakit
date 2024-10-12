<script lang="ts">
  export type ActionableListState = 'hover' | 'action-triggered' | 'disabled' | 'loading';
  export let state: ActionableListState = 'hover';
  export let items: string[] = [];
  export let disabled: boolean = false;

  function handleAction(item: string) {
    if (!disabled) {
      console.log(`Action triggered for: ${item}`);
    }
  }

  function handleKey(event: KeyboardEvent, item: string) {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      handleAction(item);
    }
  }
</script>

<ul class={`actionable-list actionable-list-${state}`}>
  {#each items as item}
    <li
      class="actionable-list-item"
      role="button"
      tabindex={disabled ? -1 : 0}
      on:click={() => handleAction(item)}
      on:keydown={(event) => handleKey(event, item)}
      aria-disabled={disabled}
    >
      {item}
    </li>
  {/each}
</ul>

<style lang="css">
  @import './ActionableList.css';
</style>