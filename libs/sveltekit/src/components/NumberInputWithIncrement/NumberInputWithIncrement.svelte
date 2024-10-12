<script lang="ts">
  import { writable } from 'svelte/store';

  export let value: number = 0;
  export let min: number = 0;
  export let max: number = 100;
  export let step: number = 1;
  export let disabled: boolean = false;

  const handleIncrement = () => {
    if (value + step <= max) {
      value += step;
    }
  };

  const handleDecrement = () => {
    if (value - step >= min) {
      value -= step;
    }
  };
</script>

<div class="number-input-container" aria-label="Number Input with Increment" role="group">
  <button on:click={handleDecrement} disabled={disabled || value <= min} aria-label="Decrement" class="decrement-btn">
    -
  </button>
  <input type="number" bind:value min={min} max={max} step={step} disabled={disabled} aria-label="Number input" />
  <button on:click={handleIncrement} disabled={disabled || value >= max} aria-label="Increment" class="increment-btn">
    +
  </button>
</div>

<style lang="css">
  @import './NumberInputWithIncrement.css';
</style>