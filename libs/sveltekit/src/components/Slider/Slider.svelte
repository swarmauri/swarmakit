<script lang="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 50;
  export let isDisabled: boolean = false;

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = parseInt(target.value, 10);
  }
</script>

<div class="slider-container">
  <input
    type="range"
    class="slider"
    {min}
    {max}
    bind:value
    aria-disabled={isDisabled}
    {isDisabled}
    on:input={handleChange}
  />
  <span class="value-label">{value}</span>
</div>

<style lang="css">
  .slider-container {
    display: flex;
    align-items: center;
  }

  .slider {
    flex: 1;
    margin-right: 10px;
  }

  .slider[aria-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .value-label {
    font-size: 16px;
  }
</style>