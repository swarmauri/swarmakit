<script lang="ts">
  export let name: string;
  export let value: string;
  export let selectedValue: string;
  export let disabled: boolean = false;

  const isSelected = value === selectedValue;
</script>

<div class="radio-button">
  <input 
    type="radio" 
    bind:group={selectedValue} 
    {value} 
    {name} 
    {disabled} 
    checked={isSelected} 
    aria-checked={isSelected} 
    aria-disabled={disabled}
  />
  <label class:disabled={disabled}>{value}</label>
</div>

<style lang="css">
  .radio-button {
    display: flex;
    align-items: center;
  }

  .radio-button input[type="radio"] {
    margin-right: 8px;
  }

  .radio-button label {
    font-size: 16px;
    cursor: pointer;
  }

  .radio-button label.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>