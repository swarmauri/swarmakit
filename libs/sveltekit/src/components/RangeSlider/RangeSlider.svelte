<script lang="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 50;
  export let disabled: boolean = false;

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = parseInt(target.value);
  }
</script>

<div class="range-slider">
  <input
    type="range"
    min={min}
    max={max}
    bind:value
    disabled={disabled}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    class="slider"
    on:input={handleInput}
  />
</div>

<style lang="css">
  @import './RangeSlider.css';
</style>