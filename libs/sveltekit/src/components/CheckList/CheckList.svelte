<script lang="ts">
  export type CheckListState = 'checked' | 'unchecked' | 'partially-checked' | 'disabled';
  export let state: CheckListState = 'unchecked';
  export let items: { label: string; checked: boolean }[] = [];
  export let disabled: boolean = false;

  function toggleCheck(index: number) {
    if (!disabled) {
      items[index].checked = !items[index].checked;
    }
  }

  function handleKey(event: KeyboardEvent, index: number) {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      toggleCheck(index);
    }
  }
</script>

<div class={`checklist checklist-${state}`}>
  {#each items as { label, checked }, index}
    <div
      class="checklist-item"
      role="checkbox"
      tabindex={disabled ? -1 : 0}
      aria-checked={checked}
      aria-disabled={disabled}
      on:click={() => toggleCheck(index)}
      on:keydown={(event) => handleKey(event, index)}
    >
      <input type="checkbox" bind:checked disabled={disabled} />
      <label>{label}</label>
    </div>
  {/each}
</div>

<style lang="css">
  @import './CheckList.css';
</style>