<script lang="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let value: number = 50;
  export let disabled: boolean = false;
  
  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = parseInt(target.value, 10);
  }
</script>

<div class="range-slider">
  <input 
    type="range" 
    min={min} 
    max={max} 
    bind:value 
    {disabled}
    on:input={handleInput}
    aria-valuemin={min} 
    aria-valuemax={max} 
    aria-valuenow={value} 
    aria-disabled={disabled} 
  />
  <span>{value}</span>
</div>

<style lang="css">
  .range-slider {
    display: flex;
    align-items: center;
  }

  .range-slider input[type="range"] {
    margin-right: 8px;
    cursor: pointer;
  }

  .range-slider input[type="range"]:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .range-slider span {
    font-size: 16px;
  }
</style>