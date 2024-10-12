<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let name: string;
  export let value: string;
  export let selectedValue: string;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('change', target.value);
  }
</script>

<div role="radiogroup" class="radio-button-container">
  <input
    type="radio"
    name={name}
    value={value}
    checked={value === selectedValue}
    on:change={handleChange}
    disabled={disabled}
    aria-checked={value === selectedValue}
  />
  <label>{value}</label>
</div>

<style lang="css">
  @import './RadioButton.css';
</style>