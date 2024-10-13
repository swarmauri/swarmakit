<script lang="ts">
  export let value: number = 0;
  export let step: number = 1;
  export let disabled: boolean = false;

  function increment() {
    if (!disabled) {
      value += step;
    }
  }

  function decrement() {
    if (!disabled) {
      value -= step;
    }
  }
</script>

<div class="number-input">
  <button on:click={decrement} aria-label="Decrement" disabled={disabled}>-</button>
  <input type="number" bind:value {disabled} aria-label="Number input" />
  <button on:click={increment} aria-label="Increment" disabled={disabled}>+</button>
</div>

<style lang="css">
  .number-input {
    display: flex;
    align-items: center;
  }

  .number-input button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    font-size: 16px;
  }

  .number-input button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }

  .number-input input[type="number"] {
    width: 60px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    margin: 0 5px;
    font-size: 16px;
  }
</style>