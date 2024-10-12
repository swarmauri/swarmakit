<script lang="ts">
  export let selected: boolean = false;
  export let disabled: boolean = false;
  export let name: string = '';
  export let value: string = '';
  export let label: string = '';

  function handleKeyDown(event: KeyboardEvent) {
    if (!disabled && (event.key === 'Enter' || event.key === ' ')) {
      selected = !selected;
      event.preventDefault();
    }
  }
</script>

<div 
  class="radio-button" 
  role="radio" 
  aria-checked={selected} 
  aria-disabled={disabled}
  tabindex={disabled ? -1 : 0}
  on:click={() => !disabled && (selected = !selected)}
  on:keydown={handleKeyDown}
>
  <input
    type="radio"
    bind:checked={selected}
    disabled={disabled}
    name={name}
    value={value}
    aria-label={label}
    class="radio-input"
  />
  <label>{label}</label>
</div>

<style lang="css">
  @import './RadioButton.css';
</style>