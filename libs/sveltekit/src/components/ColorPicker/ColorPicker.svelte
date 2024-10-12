<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let selectedColor: string = '#000000';
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleColorChange(event: Event) {
    if (!disabled) {
      const input = event.target as HTMLInputElement;
      selectedColor = input.value;
      dispatch('change', { color: selectedColor });
    }
  }
</script>

<div
  class="color-picker-container"
  aria-disabled={disabled}
>
  <input
    type="color"
    bind:value={selectedColor}
    on:input={handleColorChange}
    disabled={disabled}
    aria-label="Color Picker"
  />
  <label class="color-label">{selectedColor}</label>
</div>

<style lang="css">
  .color-picker-container {
    display: flex;
    align-items: center;
  }

  input[type='color'] {
    margin-right: 0.5rem;
    border: none;
    width: 40px;
    height: 40px;
    padding: 0;
    background: none;
    cursor: pointer;
  }

  .color-label {
    font-size: 1rem;
  }

  input[type='color']:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>