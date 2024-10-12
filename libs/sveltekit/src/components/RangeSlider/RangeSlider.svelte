<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 50;
  export let step: number = 1;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = parseInt(target.value, 10);
    dispatch('input', value);
  }
</script>

<div class="range-slider-container">
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    bind:value={value}
    disabled={disabled}
    on:input={handleInput}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
  />
  <output>{value}</output>
</div>

<style lang="css">
  @import './RangeSlider.css';
</style>