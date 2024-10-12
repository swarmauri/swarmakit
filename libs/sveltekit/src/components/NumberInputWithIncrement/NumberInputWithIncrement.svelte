<script lang="ts">
  export let value: number = 0;
  export let step: number = 1;
  export let min: number = -Infinity;
  export let max: number = Infinity;
  export let disabled: boolean = false;
  export let onValueChange: (value: number) => void;

  function increment() {
    if (!disabled && value + step <= max) {
      onValueChange(value + step);
    }
  }

  function decrement() {
    if (!disabled && value - step >= min) {
      onValueChange(value - step);
    }
  }

  function handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = parseInt(target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onValueChange(newValue);
    }
  }
</script>

<div class="number-input-container" role="spinbutton" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}>
  <button on:click={decrement} disabled={disabled} aria-label="Decrement">-</button>
  <input type="number" bind:value min={min} max={max} step={step} on:input={handleInputChange} disabled={disabled} />
  <button on:click={increment} disabled={disabled} aria-label="Increment">+</button>
</div>

<style lang="css">
  @import './NumberInputWithIncrement.css';
</style>