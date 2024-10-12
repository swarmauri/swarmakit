<script lang="ts">
  export type CardbasedListState = 'hover' | 'selected' | 'disabled';
  export let state: CardbasedListState = 'hover';
  export let items: { title: string; description: string }[] = [];
  export let selectedItem: number | null = null;
  export let disabled: boolean = false;

  function handleSelect(index: number) {
    if (!disabled) {
      selectedItem = index;
    }
  }

  function handleKey(event: KeyboardEvent, index: number) {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      handleSelect(index);
    }
  }
</script>

<div class={`cardbased-list cardbased-list-${state}`}>
  {#each items as { title, description }, index}
    <div
      class="cardbased-list-item"
      role="button"
      tabindex={disabled ? -1 : 0}
      on:click={() => handleSelect(index)}
      on:keydown={(event) => handleKey(event, index)}
      aria-disabled={disabled}
      aria-selected={selectedItem === index}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  {/each}
</div>

<style lang="css">
  @import './CardbasedList.css';
</style>