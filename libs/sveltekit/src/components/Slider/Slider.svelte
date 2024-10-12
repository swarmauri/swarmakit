<script lang="ts">
  export type SliderState = 'min' | 'max' | 'disabled';
  export let state: SliderState = 'min';
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 0;

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = Number(target.value);
  }
</script>

<input
  class={`slider slider-${state}`}
  type="range"
  min={min}
  max={max}
  bind:value={value}
  on:input={handleInput}
  disabled={state === 'disabled'}
  aria-valuemin={min}
  aria-valuemax={max}
  aria-valuenow={value}
  aria-disabled={state === 'disabled'}
  role="slider"
/>

<style lang="css">
  @import './Slider.css';
</style>