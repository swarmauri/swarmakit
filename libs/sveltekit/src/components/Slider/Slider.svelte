<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export enum SliderState {
    Min = 'min',
    Max = 'max',
    Disabled = 'disabled'
  }

  export let state: SliderState = SliderState.Min;
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = min;
  export let step: number = 1;

  const dispatch = createEventDispatcher();

  function handleChange(event: Event) {
    if (state !== SliderState.Disabled) {
      value = parseFloat((event.target as HTMLInputElement).value);
      dispatch('change', value);
    }
  }
</script>

<input
  type="range"
  class="slider"
  bind:value
  min={min}
  max={max}
  step={step}
  on:input={handleChange}
  {disabled}
  aria-disabled={state === SliderState.Disabled}
/>

<style lang="css">
  @import './Slider.css';
</style>