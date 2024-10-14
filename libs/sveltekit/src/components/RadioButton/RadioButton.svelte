<script lang="ts">
  export let selected: boolean = false;
  export let disabled: boolean = false;
  export let label: string = '';

  function handleSelect() {
    if (!disabled) {
      selected = !selected;
    }
  }
</script>

<div class="radio-button" role="radio" aria-checked={selected} aria-disabled={disabled} on:click={handleSelect}>
  <input
    type="radio"
    checked={selected}
    disabled={disabled}
    aria-label={label}
  />
  <label>{label}</label>
</div>

<style lang="css">
  @import './RadioButton.css';
</style>